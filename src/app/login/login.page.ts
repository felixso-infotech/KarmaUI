import { ActivityService } from './../activity.service';
import { RegisteredUserModel } from './../api/models/registered-user-model';
import { Oauth2User } from './../user';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { LoginService } from '../security/login.service';
import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { OAuthService } from 'angular-oauth2-oidc';
import { AggregateQueryResourceService, AggregateCommandResourceService } from '../api/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private isMobile: boolean;

  constructor(private navCntrl: NavController,
    private oauthService: OAuthService,
    private loginService: LoginService,
    private platform: Platform,
    private nativeStorage: NativeStorage,
    private queryService: AggregateQueryResourceService,
    private commandService:AggregateCommandResourceService,
    private activityService: ActivityService) { }

  ngOnInit() {
    if (this.platform.is("mobileweb") || this.platform.is("pwa") || this.platform.is("desktop")) {
      this.isMobile = false;
    }
    else {
      this.isMobile = true;
    }
    if (this.isMobile) {
      this.appLogin();
    }
    else {
      this.webLogin();
    }
  }

  webLogin() {
    this.oauthService.loadDiscoveryDocumentAndLogin().then(success => {
      console.log("authentication completed", success, this.oauthService.hasValidAccessToken());
      if (this.oauthService.hasValidAccessToken()) {
        this.oauthService.loadUserProfile().then(profile => {
          console.log(profile);
          console.log("identity clainms ",this.oauthService.getIdentityClaims());
          this.loginService.user = <Oauth2User>profile;
        });
      }
    },
      error => {
        console.log("authentication not completed", error);
      });
  }
  appLogin() {
    console.log("platform is mobile");
    this.loginService.doAppLogin().then(success => {
      console.log("oauth success object", success);
      const idToken = success.id_token;
      const accessToken = success.access_token;
      const keyValuePair = `#id_token=${encodeURIComponent(idToken)}&access_token=${encodeURIComponent(accessToken)}`;
      console.log("kayValuePair", keyValuePair);
      this.oauthService.loadDiscoveryDocumentAndTryLogin({
        customHashFragment: keyValuePair,
        disableOAuth2StateCheck: true
      }).then(response => {
        console.log("load discovery document", response);
        if (response) {
          const claims: any = this.oauthService.getIdentityClaims();
          this.oauthService.loadUserProfile().then(profile => {
            console.log("identity clainms ",this.oauthService.getIdentityClaims());
           
            this.loginService.user=<RegisteredUserModel>profile;
            this.loginService.user.userId=(<Oauth2User>profile).preferred_username;
            this.updateLocalUsers();

            this.nativeStorage.setItem('keyValuePair', keyValuePair).then(() => {
              console.log("keyValuePair saved");
            },
              error => {
                console.log("error while saving keyValuePair", error);
              });
          });

          console.log("claims", claims);
        }
      });
      this.navCntrl.navigateRoot("/tabs");
      /*       this.oauthService.tryLogin({
              customHashFragment: keyValuePair,
              disableOAuth2StateCheck: true
            }).then(success => {
              console.log("success when calling trylogin", success);
            },
              error => {
                console.log("error when calling trylogin", error);
              }); */
      // this.translate.use(account.langKey);
      //return cb(claims);
    }, (error) => {
      ///*  */ return fail(error);
      console.log("in configureOauth", error);

    });
  }
  updateLocalUsers() {
    this.queryService.getRegisteredUserByUserIdUsingGET(this.loginService.user.userId)
    .subscribe(result => {
      console.log("user got from backend",result);
      this.loginService.user.registeredUserId=result.registeredUserId;
      this.activityService.loadActivities();
      this.saveUserLocally();

    }, err => {
      console.log('fetched registeredUser');
      if(err.status == 500) {
        this.commandService.createRegisteredUserUsingPOST(this.loginService.user).subscribe(response=>{
          console.log("new user saved successfully",response);
          this.loginService.user.registeredUserId=response.registeredUserId;
          this.activityService.loadActivities();
          this.saveUserLocally();
        },
        error=>{
          console.log("something went wrong when saving the user",error);
        })
      }
    });
  }
  saveUserLocally(){
    this.nativeStorage.setItem('user', this.loginService.user).
    then(() => {
      console.log("user saved successsfully in native storage", this.loginService.user);
    },
      error => {
        console.log("error when saving user locally", error);
    });
  }

}

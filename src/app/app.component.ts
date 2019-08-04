import { ActivityService } from './activity.service';
import { RegisteredUserModel } from './api/models/registered-user-model';
import { Oauth2User } from './user';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { LoginService } from './security/login.service';
import { authConfig } from './security/security.config';
import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { OAuthService, JwksValidationHandler, OAuthEvent } from 'angular-oauth2-oidc';
import { AggregateQueryResourceService, AggregateCommandResourceService } from './api/services';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  
  user:Oauth2User;
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private oauthService: OAuthService,
    private loginService: LoginService,
    private navCntrl: NavController,
    private nativeStorage: NativeStorage,
    private queryService: AggregateQueryResourceService,
    private commandService:AggregateCommandResourceService,
    private activityService: ActivityService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
      this.configureOauth();
    });
  }
  configureOauth() {
    console.log("in app component");
    console.log(this.platform);
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    if (this.platform.is("desktop") || this.platform.is("pwa") || this.platform.is("mobileweb")) {
      this.oauthService.loadDiscoveryDocumentAndLogin().then(success => {
        console.log("authentication completed", success, this.oauthService.hasValidAccessToken());
        if (this.oauthService.hasValidAccessToken()) {
          this.oauthService.loadUserProfile().then(profile=> {
            console.log(profile);
            this.loginService.user=<RegisteredUserModel>profile;
            this.loginService.user.userId=(<Oauth2User>profile).preferred_username;
            this.updateLocalUsers();
          });
        }
      },
        error => {
          console.log("authentication not completed", error);
        });
    }
    else {
      if (!this.oauthService.hasValidAccessToken()) {
        this.nativeStorage.getItem('keyValuePair')
          .then(
            keyValuePair => {
              console.log("keyValuePair", keyValuePair);

              if (keyValuePair == null || keyValuePair == undefined) {
                this.navCntrl.navigateRoot('/login');
              }
              else {
                this.nativeStorage.getItem('user').
                then((user) => {
                  console.log("user fetched successsfully",user);
                  this.loginService.user = user;
                  this.activityService.loadActivities();
                },
                  error => {
                    console.log("error when fetching user ", error);
                });
                this.oauthService.loadDiscoveryDocumentAndTryLogin({
                  customHashFragment: keyValuePair,
                  disableOAuth2StateCheck: true
                }).then(response => {
                  console.log("load discovery document", response);
                });
              }
            },
            error => {
              console.error("Error when getting keyValuePair", error);
              this.navCntrl.navigateRoot('/login');
            }
          );
      }
    }

    this.oauthService.events.subscribe(({ type }: OAuthEvent) => {
      console.log("oauth service events", type);
      switch (type) {
        case 'token_received':
          const idToken = this.oauthService.getIdToken();
          const accessToken = this.oauthService.getAccessToken();
          if (accessToken && idToken) {
            console.log("oauth events", accessToken);
            console.log("oauth events", idToken);

          }
      }
    });
  }

  updateLocalUsers() {
    this.queryService.getRegisteredUserByUserIdUsingGET(this.loginService.user.userId)
    .subscribe(result => {
      console.log("user got from backend",result);
      this.loginService.user.registeredUserId=result.registeredUserId;
      this.activityService.loadActivities();
    }, err => {
      console.log('fetched registeredUser');
      if(err.status == 500) {
        this.commandService.createRegisteredUserUsingPOST(this.loginService.user).subscribe(response=>{
          console.log("new user saved successfully",response);
          this.loginService.user.registeredUserId=response.registeredUserId;
          this.activityService.loadActivities();
        },
        error=>{
          console.log("something went wrong when saving the user",error);
        })
      }
    });
  }
}

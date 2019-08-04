import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { LoginService } from '../security/login.service';
import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { OAuthService } from 'angular-oauth2-oidc';

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
    private nativeStorage: NativeStorage) { }

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
          this.loginService.user = profile;
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
          this.oauthService.loadUserProfile().then(user => {
            this.loginService.user = user;

            this.nativeStorage.setItem('user', user).
              then(() => {
                console.log("user saved successsfully", user);
              },
                error => {
                  console.log("error when saving user ", error);
              });

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
}

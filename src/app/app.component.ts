import { LoginService } from './security/login.service';
import { authConfig } from './security/security.config';
import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { OAuthService, JwksValidationHandler, OAuthEvent } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private oauthService: OAuthService,
    private loginService: LoginService,
    private navCntrl: NavController
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
    if (this.platform.is("desktop")||this.platform.is("pwa")||this.platform.is("mobileweb")) {
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
    else{
      if(!this.oauthService.hasValidAccessToken()) {
        this.navCntrl.navigateRoot('/login');
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
}

import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthConfig } from 'angular-oauth2-oidc/auth.config';
import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'http://35.196.86.249:8080/auth/realms/Karma',
  redirectUri: window.location.origin,
  clientId: 'karma',
  scope: 'openid profile email',
  dummyClientSecret: '5f6dc31d-8834-44a2-b590-59ccf90aacdc',
  tokenEndpoint: 'http://35.196.86.249:8080/auth/realms/Karma/protocol/openid-connect/token',
  userinfoEndpoint: 'http://35.196.86.249:8080/auth/realms/Karma/protocol/openid-connect/userinfo',
  oidc: false,
  requireHttps: false
};

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private oauthService: OAuthService
  ) {
    this.initializeApp();
    this.configureOAuth();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
    });
  }

  configureOAuth(): any {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    // Load Discovery Document and then try to login the user
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
}

import { Platform } from '@ionic/angular';
import { Injectable, NgZone } from '@angular/core';
import { IonicAuth, IonicAuthorizationRequestHandler } from 'ionic-appauth';
import { BrowserService } from './browser.service';
import { CordovaRequestorService } from './cordova-requestor.service';
import { SecureStorageService } from './secure-storage.service';
import { StorageService } from './storage.service';
import { RequestorService } from './requestor.service';

interface AuthConfig {
  issuer: string;
  clientId: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService extends IonicAuth {
  constructor(
    requestor: RequestorService,
    cordovaRequestor: CordovaRequestorService,
    storage: StorageService,
    secureStorage: SecureStorageService,
    browser: BrowserService,
    private platform: Platform,
    private ngZone: NgZone
  ) {
    super(
      platform.is('cordova') ? browser : undefined,
      platform.is('cordova') ? secureStorage : storage,
      platform.is('cordova') ? cordovaRequestor : requestor
    );

    console.log("constructor");
    this.addConfig();
  }

  public async startUpAsync() {
    console.log('startup async', this.platform);

    if (this.platform.is('cordova')) {
      (<any>window).handleOpenURL = callbackUrl => {
        this.ngZone.run(() => {
          this.handleCallback(callbackUrl);
        });
      };
    }

    super.startUpAsync();
  }

  private onDevice(): boolean {
    return this.platform.is('cordova');
  }

  private async addConfig() {
    console.log("in add config");
    const scopes = 'openid profile offline_access';
    const redirectUri = this.onDevice() ? window.location.origin+'/callback' : 'http://localhost:8100/implicit/callback';
    const logoutRedirectUri = this.onDevice() ? window.location.origin+'/logout' : 'http://localhost:8100/implicit/logout';
    const AUTH_CONFIG_URI = 'http://35.208.4.27:8060/api/auth-info';

    if (await this.storage.getItem(AUTH_CONFIG_URI)) {
      this.authConfig = JSON.parse(await this.storage.getItem(AUTH_CONFIG_URI));
      await this.storage.removeItem(AUTH_CONFIG_URI);
    } else {
      // try to get the oauth settings from the server
      this.requestor.xhr({ method: 'GET', url: AUTH_CONFIG_URI }).then(
        async (data: any) => {
          this.authConfig = {
            identity_client: data.clientId,
            identity_server: data.issuer,
            redirect_url: redirectUri,
            end_session_redirect_url: logoutRedirectUri,
            scopes,
            usePkce: true
          };
          await this.storage.setItem(AUTH_CONFIG_URI, JSON.stringify(this.authConfig));
        },
        error => {
          console.error('ERROR fetching authentication information, defaulting to Keycloak settings');
          console.error(error);
          this.authConfig = {
            identity_client: 'karma-app',
            identity_server: 'http://http://35.196.65.11:8099/auth/realms/karma',
            redirect_url: redirectUri,
            end_session_redirect_url: logoutRedirectUri,
            scopes,
            usePkce: true
          };
        }
      );
    }
  }

  private handleCallback(callbackUrl: string): void {
    if (callbackUrl.indexOf(this.authConfig.redirect_url) === 0) {
      this.AuthorizationCallBack(callbackUrl).catch((error: string) => {
        console.error(`Authorization callback failed! ${error}`);
      });
    }

    if (callbackUrl.indexOf(this.authConfig.end_session_redirect_url) === 0) {
      this.EndSessionCallBack().catch((error: string) => {
        console.error(`End session callback failed! ${error}`);
      });
    }
  }
}

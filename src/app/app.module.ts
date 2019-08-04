import { AuthInterceptor } from './security/oauth/oauth-interceptor';

import { KarmaXapiService } from './karma-xapi.service';
import { KarmaLrsService } from './karma-lrs.service';
import { KarmaAppService } from './karma-app.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { Camera } from '@ionic-native/camera/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { NgxWheelModule } from 'ngx-wheel';
import { OAuthModule } from 'angular-oauth2-oidc';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,NgxWheelModule,  OAuthModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    KarmaAppService,
    KarmaLrsService,
    KarmaXapiService,
    Camera,
    ImagePicker,
    Base64,
    SocialSharing,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true

    },
    InAppBrowser,
    NativeStorage
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

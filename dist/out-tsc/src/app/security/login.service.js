import * as tslib_1 from "tslib";
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Platform } from '@ionic/angular';
import { OAuthService } from 'angular-oauth2-oidc';
import { Injectable } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
var LoginService = /** @class */ (function () {
    function LoginService(oauthService, platform, iab, nativeStorage) {
        this.oauthService = oauthService;
        this.platform = platform;
        this.iab = iab;
        this.nativeStorage = nativeStorage;
    }
    LoginService.prototype.doAppLogin = function () {
        var _this = this;
        return this.oauthService.createAndSaveNonce().then(function (nonce) {
            var state = Math.floor(Math.random() * 1000000000).toString();
            var url = "";
            if (window.crypto) {
                var array = new Uint32Array(1);
                window.crypto.getRandomValues(array);
                state = array.join().toString();
            }
            return new Promise(function (resolve, reject) {
                var oauthUrl = _this.buildUrl(state, nonce);
                console.log("oauth url", oauthUrl);
                var browser = _this.iab.create(oauthUrl, '_blank', 'location=no,clearsessioncache=yes,clearcache=yes,zoom=no,hideurlbar=yes');
                console.log("browser", browser);
                browser.on('loadstart').subscribe(function (event) {
                    console.log("loadstart", event);
                });
                browser.on('loaderror').subscribe(function (data) {
                    console.log("event", data);
                    console.log("origin", window.location.origin);
                    if ((data.url).indexOf(window.location.origin) === 0) {
                        url = data.url;
                        browser.close();
                    }
                    var responseParameters = ((data.url).split('#')[1]).split('&');
                    console.log("response parameters", responseParameters);
                    var parsedResponse = {};
                    for (var i = 0; i < responseParameters.length; i++) {
                        parsedResponse[responseParameters[i].split('=')[0]] =
                            responseParameters[i].split('=')[1];
                        console.log("parsedResponse in loop", parsedResponse);
                    }
                    var defaultError = 'Problem authenticating with OAuth';
                    if (parsedResponse['state'] !== state) {
                        reject(defaultError);
                    }
                    else if (parsedResponse['access_token'] !== undefined &&
                        parsedResponse['access_token'] !== null) {
                        console.log("access token", parsedResponse['access_token']);
                        resolve(parsedResponse);
                    }
                    else {
                        reject(defaultError);
                    }
                });
                browser.on('exit').subscribe(function (event) {
                    console.log("exit event", event);
                    console.log("exit event url", url);
                    reject("problem with back button..closed inapp browser with back button");
                });
            });
        });
    };
    LoginService.prototype.buildUrl = function (state, nonce) {
        return this.oauthService.loginUrl + '?' +
            'client_id=' + this.oauthService.clientId + '&' +
            'redirect_uri=' + this.oauthService.redirectUri + '&' +
            'response_type=id_token%20token&' +
            'scope=' + encodeURI(this.oauthService.scope) + '&' +
            'state=' + state + '&nonce=' + nonce;
    };
    LoginService.prototype.logout = function () {
        if (this.platform.is("desktop") || this.platform.is("pwa") || this.platform.is("mobileweb")) {
            // do global logout when using browser/*  */
            this.oauthService.logOut();
        }
        else {
            // don't redirect to global logout in app
            this.oauthService.logOut(true);
            this.nativeStorage.setItem('keyValuePair', null).then(function () {
                console.log("keyValuePair removed");
            }, function (error) {
                console.log("error while removing keyValuePair", error);
            });
            this.nativeStorage.setItem('user', null).then(function () {
                console.log("user removed");
            }, function (error) {
                console.log("error while removing user", error);
            });
        }
    };
    LoginService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [OAuthService,
            Platform,
            InAppBrowser,
            NativeStorage])
    ], LoginService);
    return LoginService;
}());
export { LoginService };
//# sourceMappingURL=login.service.js.map
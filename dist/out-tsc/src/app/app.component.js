import * as tslib_1 from "tslib";
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { LoginService } from './security/login.service';
import { authConfig } from './security/security.config';
import { Component } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { AggregateQueryResourceService, AggregateCommandResourceService } from './api/services';
var AppComponent = /** @class */ (function () {
    function AppComponent(platform, splashScreen, statusBar, oauthService, loginService, navCntrl, nativeStorage, queryService, commandService) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.oauthService = oauthService;
        this.loginService = loginService;
        this.navCntrl = navCntrl;
        this.nativeStorage = nativeStorage;
        this.queryService = queryService;
        this.commandService = commandService;
        this.initializeApp();
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleLightContent();
            _this.splashScreen.hide();
            _this.configureOauth();
        });
    };
    AppComponent.prototype.configureOauth = function () {
        var _this = this;
        console.log("in app component");
        console.log(this.platform);
        this.oauthService.configure(authConfig);
        this.oauthService.tokenValidationHandler = new JwksValidationHandler();
        if (this.platform.is("desktop") || this.platform.is("pwa") || this.platform.is("mobileweb")) {
            this.oauthService.loadDiscoveryDocumentAndLogin().then(function (success) {
                console.log("authentication completed", success, _this.oauthService.hasValidAccessToken());
                if (_this.oauthService.hasValidAccessToken()) {
                    _this.oauthService.loadUserProfile().then(function (profile) {
                        console.log(profile);
                        _this.loginService.user = profile;
                        _this.loginService.user.userId = profile.preferred_username;
                        _this.updateLocalUsers();
                    });
                }
            }, function (error) {
                console.log("authentication not completed", error);
            });
        }
        else {
            if (!this.oauthService.hasValidAccessToken()) {
                this.oauthService.fetchTokenUsingPasswordFlowAndLoadUserProfile;
                this.nativeStorage.getItem('keyValuePair')
                    .then(function (keyValuePair) {
                    console.log("keyValuePair", keyValuePair);
                    if (keyValuePair == null || keyValuePair == undefined) {
                        _this.navCntrl.navigateRoot('/login');
                    }
                    else {
                        _this.nativeStorage.getItem('user').
                            then(function (user) {
                            console.log("user fetched successsfully", user);
                            _this.loginService.user = user;
                        }, function (error) {
                            console.log("error when fetching user ", error);
                        });
                        _this.oauthService.loadDiscoveryDocumentAndTryLogin({
                            customHashFragment: keyValuePair,
                            disableOAuth2StateCheck: true
                        }).then(function (response) {
                            console.log("load discovery document", response);
                        });
                    }
                }, function (error) {
                    console.error("Error when getting keyValuePair", error);
                    _this.navCntrl.navigateRoot('/login');
                });
            }
        }
        this.oauthService.events.subscribe(function (_a) {
            var type = _a.type;
            console.log("oauth service events", type);
            switch (type) {
                case 'token_received':
                    var idToken = _this.oauthService.getIdToken();
                    var accessToken = _this.oauthService.getAccessToken();
                    if (accessToken && idToken) {
                        console.log("oauth events", accessToken);
                        console.log("oauth events", idToken);
                    }
            }
        });
    };
    AppComponent.prototype.updateLocalUsers = function () {
        var _this = this;
        this.queryService.getRegisteredUserByUserIdUsingGET(this.loginService.user.userId)
            .subscribe(function (result) {
            console.log("user got from backend", result);
            _this.loginService.user.registeredUserId = result.registeredUserId;
        }, function (err) {
            console.log('fetched registeredUser');
            if (err.status == 500) {
                _this.commandService.createRegisteredUserUsingPOST(_this.loginService.user).subscribe(function (response) {
                    console.log("new user saved successfully", response);
                    _this.loginService.user.registeredUserId = response.registeredUserId;
                }, function (error) {
                    console.log("something went wrong when saving the user", error);
                });
            }
        });
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: 'app.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [Platform,
            SplashScreen,
            StatusBar,
            OAuthService,
            LoginService,
            NavController,
            NativeStorage,
            AggregateQueryResourceService,
            AggregateCommandResourceService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map
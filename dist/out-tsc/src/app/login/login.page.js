import * as tslib_1 from "tslib";
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { LoginService } from '../security/login.service';
import { Component } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { OAuthService } from 'angular-oauth2-oidc';
import { AggregateQueryResourceService, AggregateCommandResourceService } from '../api/services';
var LoginPage = /** @class */ (function () {
    function LoginPage(navCntrl, oauthService, loginService, platform, nativeStorage, queryService, commandService) {
        this.navCntrl = navCntrl;
        this.oauthService = oauthService;
        this.loginService = loginService;
        this.platform = platform;
        this.nativeStorage = nativeStorage;
        this.queryService = queryService;
        this.commandService = commandService;
    }
    LoginPage.prototype.ngOnInit = function () {
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
    };
    LoginPage.prototype.webLogin = function () {
        var _this = this;
        this.oauthService.loadDiscoveryDocumentAndLogin().then(function (success) {
            console.log("authentication completed", success, _this.oauthService.hasValidAccessToken());
            if (_this.oauthService.hasValidAccessToken()) {
                _this.oauthService.loadUserProfile().then(function (profile) {
                    console.log(profile);
                    console.log("identity clainms ", _this.oauthService.getIdentityClaims());
                    _this.loginService.user = profile;
                });
            }
        }, function (error) {
            console.log("authentication not completed", error);
        });
    };
    LoginPage.prototype.appLogin = function () {
        var _this = this;
        console.log("platform is mobile");
        this.loginService.doAppLogin().then(function (success) {
            console.log("oauth success object", success);
            var idToken = success.id_token;
            var accessToken = success.access_token;
            var keyValuePair = "#id_token=" + encodeURIComponent(idToken) + "&access_token=" + encodeURIComponent(accessToken);
            console.log("kayValuePair", keyValuePair);
            _this.oauthService.loadDiscoveryDocumentAndTryLogin({
                customHashFragment: keyValuePair,
                disableOAuth2StateCheck: true
            }).then(function (response) {
                console.log("load discovery document", response);
                if (response) {
                    var claims = _this.oauthService.getIdentityClaims();
                    _this.oauthService.loadUserProfile().then(function (profile) {
                        console.log("identity clainms ", _this.oauthService.getIdentityClaims());
                        _this.loginService.user = profile;
                        _this.loginService.user.userId = profile.preferred_username;
                        _this.updateLocalUsers();
                        _this.nativeStorage.setItem('keyValuePair', keyValuePair).then(function () {
                            console.log("keyValuePair saved");
                        }, function (error) {
                            console.log("error while saving keyValuePair", error);
                        });
                    });
                    console.log("claims", claims);
                }
            });
            _this.navCntrl.navigateRoot("/tabs");
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
        }, function (error) {
            ///*  */ return fail(error);
            console.log("in configureOauth", error);
        });
    };
    LoginPage.prototype.updateLocalUsers = function () {
        var _this = this;
        this.queryService.getRegisteredUserByUserIdUsingGET(this.loginService.user.userId)
            .subscribe(function (result) {
            console.log("user got from backend", result);
            _this.loginService.user.registeredUserId = result.registeredUserId;
            _this.saveUserLocally();
        }, function (err) {
            console.log('fetched registeredUser');
            if (err.status == 500) {
                _this.commandService.createRegisteredUserUsingPOST(_this.loginService.user).subscribe(function (response) {
                    console.log("new user saved successfully", response);
                    _this.loginService.user.registeredUserId = response.registeredUserId;
                    _this.saveUserLocally();
                }, function (error) {
                    console.log("something went wrong when saving the user", error);
                });
            }
        });
    };
    LoginPage.prototype.saveUserLocally = function () {
        var _this = this;
        this.nativeStorage.setItem('user', this.loginService.user).
            then(function () {
            console.log("user saved successsfully in native storage", _this.loginService.user);
        }, function (error) {
            console.log("error when saving user locally", error);
        });
    };
    LoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            OAuthService,
            LoginService,
            Platform,
            NativeStorage,
            AggregateQueryResourceService,
            AggregateCommandResourceService])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.page.js.map
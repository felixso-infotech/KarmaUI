import * as tslib_1 from "tslib";
import { LoginService } from './../security/login.service';
import { AlertController } from '@ionic/angular';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
var ProfilePage = /** @class */ (function () {
    // tslint:disable-next-line: max-line-length
    function ProfilePage(alertController, router, oauthService, loginService) {
        this.alertController = alertController;
        this.router = router;
        this.oauthService = oauthService;
        this.loginService = loginService;
    }
    ProfilePage.prototype.ngOnInit = function () {
        // tslint:disable-next-line: label-position
        // this.loggedUser();
        /*     this.oauthService.loadUserProfile().then((user: any) => {
              this.aggregateQueryService.getRegisteredUserByUserIdUsingGET(user.preferred_username).subscribe(res => {
              this.user = res;
              console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', this.user);
              }, err => {
                console.log('error occured while taking the user', err);
              })
              console.log(user);
            }).catch((err: HttpErrorResponse) => { */
        //this.presentToast(err.error.error_description);
        /* }); */
        this.user = this.loginService.user;
        console.log("user in profile", this.user, this.loginService.user);
    };
    ProfilePage.prototype.presentAlert = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('alert');
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Warning',
                                //subHeader: 'Are you want to log-out?',
                                message: 'Are you want to log-out?',
                                buttons: [{
                                        text: 'Cancel',
                                        role: 'cancel'
                                    },
                                    {
                                        text: 'Yes',
                                        role: 'okay',
                                        handler: function () {
                                            // (<any>window).AccountKitPlugin.logout();
                                            // this.menuCtrl.close();
                                            if (_this.oauthService.hasValidAccessToken()) {
                                                _this.loginService.logout();
                                                _this.router.navigate(['login']);
                                            }
                                        }
                                    }]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage = tslib_1.__decorate([
        Component({
            selector: 'app-profile',
            templateUrl: './profile.page.html',
            styleUrls: ['./profile.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AlertController,
            Router,
            OAuthService,
            LoginService])
    ], ProfilePage);
    return ProfilePage;
}());
export { ProfilePage };
//# sourceMappingURL=profile.page.js.map
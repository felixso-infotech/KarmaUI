import * as tslib_1 from "tslib";
import { NavController } from '@ionic/angular';
import { OAuthService } from 'angular-oauth2-oidc';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(oauthService, router, navController) {
        this.oauthService = oauthService;
        this.router = router;
        this.navController = navController;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        console.log("Check if token valid " + this.oauthService.hasValidIdToken());
        if (this.oauthService.hasValidAccessToken()) {
            return true;
        }
        this.navController.navigateRoot('/tabs/home');
        return false;
    };
    AuthGuardService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [OAuthService, Router, NavController])
    ], AuthGuardService);
    return AuthGuardService;
}());
export { AuthGuardService };
//# sourceMappingURL=auth-guard.service.js.map
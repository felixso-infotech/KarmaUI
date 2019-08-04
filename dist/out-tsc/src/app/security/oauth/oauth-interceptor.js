import * as tslib_1 from "tslib";
import { of } from 'rxjs';
import { Injectable, Injector } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { OAuthService } from 'angular-oauth2-oidc';
import { tap } from 'rxjs/operators';
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(injector) {
        this.injector = injector;
    }
    AuthInterceptor.prototype.intercept = function (request, next) {
        var oauthService = this.injector.get(OAuthService);
        if (oauthService.hasValidAccessToken()) {
            console.log("has valid access token");
            request = request.clone({
                setHeaders: {
                    Authorization: oauthService.authorizationHeader()
                }
            });
        }
        return next.handle(request).pipe(tap(function (event) {
            if (event instanceof HttpResponse) {
                return event;
            }
        }, function (error) {
            if (error instanceof HttpErrorResponse) {
                if (error.status === 401) {
                    return of(error);
                }
            }
        }));
    };
    AuthInterceptor = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Injector])
    ], AuthInterceptor);
    return AuthInterceptor;
}());
export { AuthInterceptor };
//# sourceMappingURL=oauth-interceptor.js.map
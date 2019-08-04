import * as tslib_1 from "tslib";
/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { map as __map, filter as __filter } from 'rxjs/operators';
/**
 * Account Resource
 */
var AccountResourceService = /** @class */ (function (_super) {
    tslib_1.__extends(AccountResourceService, _super);
    function AccountResourceService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * @param name undefined
     * @return OK
     */
    AccountResourceService.prototype.getAccountUsingGETResponse = function (name) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        if (name != null)
            __params = __params.set('name', name.toString());
        var req = new HttpRequest('GET', this.rootUrl + "/api/account", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param name undefined
     * @return OK
     */
    AccountResourceService.prototype.getAccountUsingGET = function (name) {
        return this.getAccountUsingGETResponse(name).pipe(__map(function (_r) { return _r.body; }));
    };
    /**
     * @return OK
     */
    AccountResourceService.prototype.isAuthenticatedUsingGETResponse = function () {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        var req = new HttpRequest('GET', this.rootUrl + "/api/authenticate", __body, {
            headers: __headers,
            params: __params,
            responseType: 'text'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @return OK
     */
    AccountResourceService.prototype.isAuthenticatedUsingGET = function () {
        return this.isAuthenticatedUsingGETResponse().pipe(__map(function (_r) { return _r.body; }));
    };
    AccountResourceService.getAccountUsingGETPath = '/api/account';
    AccountResourceService.isAuthenticatedUsingGETPath = '/api/authenticate';
    AccountResourceService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root',
        }),
        tslib_1.__metadata("design:paramtypes", [__Configuration,
            HttpClient])
    ], AccountResourceService);
    return AccountResourceService;
}(__BaseService));
export { AccountResourceService };
//# sourceMappingURL=account-resource.service.js.map
import * as tslib_1 from "tslib";
/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { map as __map, filter as __filter } from 'rxjs/operators';
/**
 * Aggregate Command Resource
 */
var AggregateCommandResourceService = /** @class */ (function (_super) {
    tslib_1.__extends(AggregateCommandResourceService, _super);
    function AggregateCommandResourceService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * @param completedActivityModel completedActivityModel
     * @return OK
     */
    AggregateCommandResourceService.prototype.createCompletedActivityUsingPOSTResponse = function (completedActivityModel) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        __body = completedActivityModel;
        var req = new HttpRequest('POST', this.rootUrl + "/api/command/completed-activities", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param completedActivityModel completedActivityModel
     * @return OK
     */
    AggregateCommandResourceService.prototype.createCompletedActivityUsingPOST = function (completedActivityModel) {
        return this.createCompletedActivityUsingPOSTResponse(completedActivityModel).pipe(__map(function (_r) { return _r.body; }));
    };
    /**
     * @param registeredUserModel registeredUserModel
     * @return OK
     */
    AggregateCommandResourceService.prototype.createRegisteredUserUsingPOSTResponse = function (registeredUserModel) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        __body = registeredUserModel;
        var req = new HttpRequest('POST', this.rootUrl + "/api/command/registered-users", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param registeredUserModel registeredUserModel
     * @return OK
     */
    AggregateCommandResourceService.prototype.createRegisteredUserUsingPOST = function (registeredUserModel) {
        return this.createRegisteredUserUsingPOSTResponse(registeredUserModel).pipe(__map(function (_r) { return _r.body; }));
    };
    /**
     * @param registeredUserModel registeredUserModel
     * @return OK
     */
    AggregateCommandResourceService.prototype.updateRegisteredUserUsingPUTResponse = function (registeredUserModel) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        __body = registeredUserModel;
        var req = new HttpRequest('PUT', this.rootUrl + "/api/command/registered-users", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param registeredUserModel registeredUserModel
     * @return OK
     */
    AggregateCommandResourceService.prototype.updateRegisteredUserUsingPUT = function (registeredUserModel) {
        return this.updateRegisteredUserUsingPUTResponse(registeredUserModel).pipe(__map(function (_r) { return _r.body; }));
    };
    AggregateCommandResourceService.createCompletedActivityUsingPOSTPath = '/api/command/completed-activities';
    AggregateCommandResourceService.createRegisteredUserUsingPOSTPath = '/api/command/registered-users';
    AggregateCommandResourceService.updateRegisteredUserUsingPUTPath = '/api/command/registered-users';
    AggregateCommandResourceService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root',
        }),
        tslib_1.__metadata("design:paramtypes", [__Configuration,
            HttpClient])
    ], AggregateCommandResourceService);
    return AggregateCommandResourceService;
}(__BaseService));
export { AggregateCommandResourceService };
//# sourceMappingURL=aggregate-command-resource.service.js.map
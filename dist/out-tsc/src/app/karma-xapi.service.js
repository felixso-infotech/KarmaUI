import * as tslib_1 from "tslib";
import { MOCK_ACTIVITIES } from './mock-activities';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
var httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    })
};
var KarmaXapiService = /** @class */ (function () {
    function KarmaXapiService(http) {
        this.http = http;
        this.XAPI_SERVER_URL = "http://192.168.43.69:8086/api/content-records?callback=foo";
    }
    KarmaXapiService.prototype.getMockActivities = function () {
        return MOCK_ACTIVITIES;
    };
    KarmaXapiService.prototype.getActivities = function () {
        return this.http.get(this.XAPI_SERVER_URL, httpOptions);
    };
    KarmaXapiService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], KarmaXapiService);
    return KarmaXapiService;
}());
export { KarmaXapiService };
//# sourceMappingURL=karma-xapi.service.js.map
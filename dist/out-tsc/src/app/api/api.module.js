import * as tslib_1 from "tslib";
/* tslint:disable */
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration } from './api-configuration';
import { AccountResourceService } from './services/account-resource.service';
import { AggregateCommandResourceService } from './services/aggregate-command-resource.service';
import { AggregateQueryResourceService } from './services/aggregate-query-resource.service';
import { UserResourceService } from './services/user-resource.service';
/**
 * Provider for all Api services, plus ApiConfiguration
 */
var ApiModule = /** @class */ (function () {
    function ApiModule() {
    }
    ApiModule_1 = ApiModule;
    ApiModule.forRoot = function (customParams) {
        return {
            ngModule: ApiModule_1,
            providers: [
                {
                    provide: ApiConfiguration,
                    useValue: { rootUrl: customParams.rootUrl }
                }
            ]
        };
    };
    var ApiModule_1;
    ApiModule = ApiModule_1 = tslib_1.__decorate([
        NgModule({
            imports: [
                HttpClientModule
            ],
            exports: [
                HttpClientModule
            ],
            declarations: [],
            providers: [
                ApiConfiguration,
                AccountResourceService,
                AggregateCommandResourceService,
                AggregateQueryResourceService,
                UserResourceService
            ],
        })
    ], ApiModule);
    return ApiModule;
}());
export { ApiModule };
//# sourceMappingURL=api.module.js.map
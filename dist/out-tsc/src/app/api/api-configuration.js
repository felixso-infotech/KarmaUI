import * as tslib_1 from "tslib";
/* tslint:disable */
import { Injectable } from '@angular/core';
/**
 * Global configuration for Api services
 */
var ApiConfiguration = /** @class */ (function () {
    function ApiConfiguration() {
        this.rootUrl = '//35.196.249.196:8065';
    }
    ApiConfiguration = tslib_1.__decorate([
        Injectable({
            providedIn: 'root',
        })
    ], ApiConfiguration);
    return ApiConfiguration;
}());
export { ApiConfiguration };
//# sourceMappingURL=api-configuration.js.map
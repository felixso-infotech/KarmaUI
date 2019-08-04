/* tslint:disable */
import { HttpParams } from '@angular/common/http';
/**
 * Custom parameter codec to correctly handle the plus sign in parameter
 * values. See https://github.com/angular/angular/issues/18261
 */
var ParameterCodec = /** @class */ (function () {
    function ParameterCodec() {
    }
    ParameterCodec.prototype.encodeKey = function (key) {
        return encodeURIComponent(key);
    };
    ParameterCodec.prototype.encodeValue = function (value) {
        return encodeURIComponent(value);
    };
    ParameterCodec.prototype.decodeKey = function (key) {
        return decodeURIComponent(key);
    };
    ParameterCodec.prototype.decodeValue = function (value) {
        return decodeURIComponent(value);
    };
    return ParameterCodec;
}());
var PARAMETER_CODEC = new ParameterCodec();
/**
 * Base class for API services
 */
var BaseService = /** @class */ (function () {
    function BaseService(config, http) {
        this.config = config;
        this.http = http;
        this._rootUrl = '';
    }
    Object.defineProperty(BaseService.prototype, "rootUrl", {
        /**
         * Returns the root url for API operations. If not set directly in this
         * service, will fallback to ApiConfiguration.rootUrl.
         */
        get: function () {
            return this._rootUrl || this.config.rootUrl;
        },
        /**
         * Sets the root URL for API operations in this service.
         */
        set: function (rootUrl) {
            this._rootUrl = rootUrl;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates a new `HttpParams` with the correct codec
     */
    BaseService.prototype.newParams = function () {
        return new HttpParams({
            encoder: PARAMETER_CODEC
        });
    };
    return BaseService;
}());
export { BaseService };
//# sourceMappingURL=base-service.js.map
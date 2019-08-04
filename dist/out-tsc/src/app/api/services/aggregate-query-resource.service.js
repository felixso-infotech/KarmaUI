import * as tslib_1 from "tslib";
/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { map as __map, filter as __filter } from 'rxjs/operators';
/**
 * Aggregate Query Resource
 */
var AggregateQueryResourceService = /** @class */ (function (_super) {
    tslib_1.__extends(AggregateQueryResourceService, _super);
    function AggregateQueryResourceService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * @param params The `AggregateQueryResourceService.GetAllActivitiesUsingGETParams` containing the following parameters:
     *
     * - `unpaged`:
     *
     * - `sort.unsorted`:
     *
     * - `sort.sorted`:
     *
     * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     *
     * - `size`: Size of a page
     *
     * - `paged`:
     *
     * - `pageSize`:
     *
     * - `pageNumber`:
     *
     * - `page`: Page number of the requested page
     *
     * - `offset`:
     *
     * @return OK
     */
    AggregateQueryResourceService.prototype.getAllActivitiesUsingGETResponse = function (params) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        if (params.unpaged != null)
            __params = __params.set('unpaged', params.unpaged.toString());
        if (params.sortUnsorted != null)
            __params = __params.set('sort.unsorted', params.sortUnsorted.toString());
        if (params.sortSorted != null)
            __params = __params.set('sort.sorted', params.sortSorted.toString());
        (params.sort || []).forEach(function (val) { if (val != null)
            __params = __params.append('sort', val.toString()); });
        if (params.size != null)
            __params = __params.set('size', params.size.toString());
        if (params.paged != null)
            __params = __params.set('paged', params.paged.toString());
        if (params.pageSize != null)
            __params = __params.set('pageSize', params.pageSize.toString());
        if (params.pageNumber != null)
            __params = __params.set('pageNumber', params.pageNumber.toString());
        if (params.page != null)
            __params = __params.set('page', params.page.toString());
        if (params.offset != null)
            __params = __params.set('offset', params.offset.toString());
        var req = new HttpRequest('GET', this.rootUrl + "/api/query/activities", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param params The `AggregateQueryResourceService.GetAllActivitiesUsingGETParams` containing the following parameters:
     *
     * - `unpaged`:
     *
     * - `sort.unsorted`:
     *
     * - `sort.sorted`:
     *
     * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     *
     * - `size`: Size of a page
     *
     * - `paged`:
     *
     * - `pageSize`:
     *
     * - `pageNumber`:
     *
     * - `page`: Page number of the requested page
     *
     * - `offset`:
     *
     * @return OK
     */
    AggregateQueryResourceService.prototype.getAllActivitiesUsingGET = function (params) {
        return this.getAllActivitiesUsingGETResponse(params).pipe(__map(function (_r) { return _r.body; }));
    };
    /**
     * @param params The `AggregateQueryResourceService.GetActivityByIdUsingGETParams` containing the following parameters:
     *
     * - `activityId`: activityId
     *
     * - `unpaged`:
     *
     * - `sort.unsorted`:
     *
     * - `sort.sorted`:
     *
     * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     *
     * - `size`: Size of a page
     *
     * - `paged`:
     *
     * - `pageSize`:
     *
     * - `pageNumber`:
     *
     * - `page`: Page number of the requested page
     *
     * - `offset`:
     *
     * @return OK
     */
    AggregateQueryResourceService.prototype.getActivityByIdUsingGETResponse = function (params) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        if (params.unpaged != null)
            __params = __params.set('unpaged', params.unpaged.toString());
        if (params.sortUnsorted != null)
            __params = __params.set('sort.unsorted', params.sortUnsorted.toString());
        if (params.sortSorted != null)
            __params = __params.set('sort.sorted', params.sortSorted.toString());
        (params.sort || []).forEach(function (val) { if (val != null)
            __params = __params.append('sort', val.toString()); });
        if (params.size != null)
            __params = __params.set('size', params.size.toString());
        if (params.paged != null)
            __params = __params.set('paged', params.paged.toString());
        if (params.pageSize != null)
            __params = __params.set('pageSize', params.pageSize.toString());
        if (params.pageNumber != null)
            __params = __params.set('pageNumber', params.pageNumber.toString());
        if (params.page != null)
            __params = __params.set('page', params.page.toString());
        if (params.offset != null)
            __params = __params.set('offset', params.offset.toString());
        var req = new HttpRequest('GET', this.rootUrl + ("/api/query/activity/" + params.activityId), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param params The `AggregateQueryResourceService.GetActivityByIdUsingGETParams` containing the following parameters:
     *
     * - `activityId`: activityId
     *
     * - `unpaged`:
     *
     * - `sort.unsorted`:
     *
     * - `sort.sorted`:
     *
     * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     *
     * - `size`: Size of a page
     *
     * - `paged`:
     *
     * - `pageSize`:
     *
     * - `pageNumber`:
     *
     * - `page`: Page number of the requested page
     *
     * - `offset`:
     *
     * @return OK
     */
    AggregateQueryResourceService.prototype.getActivityByIdUsingGET = function (params) {
        return this.getActivityByIdUsingGETResponse(params).pipe(__map(function (_r) { return _r.body; }));
    };
    /**
     * @param params The `AggregateQueryResourceService.FindAllCompletedActivityMediasByRegisteredUserIdUsingGETParams` containing the following parameters:
     *
     * - `registeredUserId`: registeredUserId
     *
     * - `unpaged`:
     *
     * - `sort.unsorted`:
     *
     * - `sort.sorted`:
     *
     * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     *
     * - `size`: Size of a page
     *
     * - `paged`:
     *
     * - `pageSize`:
     *
     * - `pageNumber`:
     *
     * - `page`: Page number of the requested page
     *
     * - `offset`:
     *
     * @return OK
     */
    AggregateQueryResourceService.prototype.findAllCompletedActivityMediasByRegisteredUserIdUsingGETResponse = function (params) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        if (params.unpaged != null)
            __params = __params.set('unpaged', params.unpaged.toString());
        if (params.sortUnsorted != null)
            __params = __params.set('sort.unsorted', params.sortUnsorted.toString());
        if (params.sortSorted != null)
            __params = __params.set('sort.sorted', params.sortSorted.toString());
        (params.sort || []).forEach(function (val) { if (val != null)
            __params = __params.append('sort', val.toString()); });
        if (params.size != null)
            __params = __params.set('size', params.size.toString());
        if (params.paged != null)
            __params = __params.set('paged', params.paged.toString());
        if (params.pageSize != null)
            __params = __params.set('pageSize', params.pageSize.toString());
        if (params.pageNumber != null)
            __params = __params.set('pageNumber', params.pageNumber.toString());
        if (params.page != null)
            __params = __params.set('page', params.page.toString());
        if (params.offset != null)
            __params = __params.set('offset', params.offset.toString());
        var req = new HttpRequest('GET', this.rootUrl + ("/api/query/all-completed-activity-media/" + params.registeredUserId), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param params The `AggregateQueryResourceService.FindAllCompletedActivityMediasByRegisteredUserIdUsingGETParams` containing the following parameters:
     *
     * - `registeredUserId`: registeredUserId
     *
     * - `unpaged`:
     *
     * - `sort.unsorted`:
     *
     * - `sort.sorted`:
     *
     * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     *
     * - `size`: Size of a page
     *
     * - `paged`:
     *
     * - `pageSize`:
     *
     * - `pageNumber`:
     *
     * - `page`: Page number of the requested page
     *
     * - `offset`:
     *
     * @return OK
     */
    AggregateQueryResourceService.prototype.findAllCompletedActivityMediasByRegisteredUserIdUsingGET = function (params) {
        return this.findAllCompletedActivityMediasByRegisteredUserIdUsingGETResponse(params).pipe(__map(function (_r) { return _r.body; }));
    };
    /**
     * @param params The `AggregateQueryResourceService.FindCompletedActivityByRegisteredUserPhoneNumberUsingGETParams` containing the following parameters:
     *
     * - `phoneNumber`: phoneNumber
     *
     * - `unpaged`:
     *
     * - `sort.unsorted`:
     *
     * - `sort.sorted`:
     *
     * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     *
     * - `size`: Size of a page
     *
     * - `paged`:
     *
     * - `pageSize`:
     *
     * - `pageNumber`:
     *
     * - `page`: Page number of the requested page
     *
     * - `offset`:
     *
     * @return OK
     */
    AggregateQueryResourceService.prototype.findCompletedActivityByRegisteredUserPhoneNumberUsingGETResponse = function (params) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        if (params.unpaged != null)
            __params = __params.set('unpaged', params.unpaged.toString());
        if (params.sortUnsorted != null)
            __params = __params.set('sort.unsorted', params.sortUnsorted.toString());
        if (params.sortSorted != null)
            __params = __params.set('sort.sorted', params.sortSorted.toString());
        (params.sort || []).forEach(function (val) { if (val != null)
            __params = __params.append('sort', val.toString()); });
        if (params.size != null)
            __params = __params.set('size', params.size.toString());
        if (params.paged != null)
            __params = __params.set('paged', params.paged.toString());
        if (params.pageSize != null)
            __params = __params.set('pageSize', params.pageSize.toString());
        if (params.pageNumber != null)
            __params = __params.set('pageNumber', params.pageNumber.toString());
        if (params.page != null)
            __params = __params.set('page', params.page.toString());
        if (params.offset != null)
            __params = __params.set('offset', params.offset.toString());
        var req = new HttpRequest('GET', this.rootUrl + ("/api/query/completed-activity-by-phonenumber/" + params.phoneNumber), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param params The `AggregateQueryResourceService.FindCompletedActivityByRegisteredUserPhoneNumberUsingGETParams` containing the following parameters:
     *
     * - `phoneNumber`: phoneNumber
     *
     * - `unpaged`:
     *
     * - `sort.unsorted`:
     *
     * - `sort.sorted`:
     *
     * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     *
     * - `size`: Size of a page
     *
     * - `paged`:
     *
     * - `pageSize`:
     *
     * - `pageNumber`:
     *
     * - `page`: Page number of the requested page
     *
     * - `offset`:
     *
     * @return OK
     */
    AggregateQueryResourceService.prototype.findCompletedActivityByRegisteredUserPhoneNumberUsingGET = function (params) {
        return this.findCompletedActivityByRegisteredUserPhoneNumberUsingGETResponse(params).pipe(__map(function (_r) { return _r.body; }));
    };
    /**
     * @param params The `AggregateQueryResourceService.FindCompletedActivityByRegisteredUserIdUsingGETParams` containing the following parameters:
     *
     * - `registeredUserId`: registeredUserId
     *
     * - `unpaged`:
     *
     * - `sort.unsorted`:
     *
     * - `sort.sorted`:
     *
     * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     *
     * - `size`: Size of a page
     *
     * - `paged`:
     *
     * - `pageSize`:
     *
     * - `pageNumber`:
     *
     * - `page`: Page number of the requested page
     *
     * - `offset`:
     *
     * @return OK
     */
    AggregateQueryResourceService.prototype.findCompletedActivityByRegisteredUserIdUsingGETResponse = function (params) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        if (params.unpaged != null)
            __params = __params.set('unpaged', params.unpaged.toString());
        if (params.sortUnsorted != null)
            __params = __params.set('sort.unsorted', params.sortUnsorted.toString());
        if (params.sortSorted != null)
            __params = __params.set('sort.sorted', params.sortSorted.toString());
        (params.sort || []).forEach(function (val) { if (val != null)
            __params = __params.append('sort', val.toString()); });
        if (params.size != null)
            __params = __params.set('size', params.size.toString());
        if (params.paged != null)
            __params = __params.set('paged', params.paged.toString());
        if (params.pageSize != null)
            __params = __params.set('pageSize', params.pageSize.toString());
        if (params.pageNumber != null)
            __params = __params.set('pageNumber', params.pageNumber.toString());
        if (params.page != null)
            __params = __params.set('page', params.page.toString());
        if (params.offset != null)
            __params = __params.set('offset', params.offset.toString());
        var req = new HttpRequest('GET', this.rootUrl + ("/api/query/completed-activity-by-registered-user/" + params.registeredUserId), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param params The `AggregateQueryResourceService.FindCompletedActivityByRegisteredUserIdUsingGETParams` containing the following parameters:
     *
     * - `registeredUserId`: registeredUserId
     *
     * - `unpaged`:
     *
     * - `sort.unsorted`:
     *
     * - `sort.sorted`:
     *
     * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     *
     * - `size`: Size of a page
     *
     * - `paged`:
     *
     * - `pageSize`:
     *
     * - `pageNumber`:
     *
     * - `page`: Page number of the requested page
     *
     * - `offset`:
     *
     * @return OK
     */
    AggregateQueryResourceService.prototype.findCompletedActivityByRegisteredUserIdUsingGET = function (params) {
        return this.findCompletedActivityByRegisteredUserIdUsingGETResponse(params).pipe(__map(function (_r) { return _r.body; }));
    };
    /**
     * @param params The `AggregateQueryResourceService.FindCompletedActivityByIdUsingGETParams` containing the following parameters:
     *
     * - `completedActivityId`: completedActivityId
     *
     * - `unpaged`:
     *
     * - `sort.unsorted`:
     *
     * - `sort.sorted`:
     *
     * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     *
     * - `size`: Size of a page
     *
     * - `paged`:
     *
     * - `pageSize`:
     *
     * - `pageNumber`:
     *
     * - `page`: Page number of the requested page
     *
     * - `offset`:
     *
     * @return OK
     */
    AggregateQueryResourceService.prototype.findCompletedActivityByIdUsingGETResponse = function (params) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        if (params.unpaged != null)
            __params = __params.set('unpaged', params.unpaged.toString());
        if (params.sortUnsorted != null)
            __params = __params.set('sort.unsorted', params.sortUnsorted.toString());
        if (params.sortSorted != null)
            __params = __params.set('sort.sorted', params.sortSorted.toString());
        (params.sort || []).forEach(function (val) { if (val != null)
            __params = __params.append('sort', val.toString()); });
        if (params.size != null)
            __params = __params.set('size', params.size.toString());
        if (params.paged != null)
            __params = __params.set('paged', params.paged.toString());
        if (params.pageSize != null)
            __params = __params.set('pageSize', params.pageSize.toString());
        if (params.pageNumber != null)
            __params = __params.set('pageNumber', params.pageNumber.toString());
        if (params.page != null)
            __params = __params.set('page', params.page.toString());
        if (params.offset != null)
            __params = __params.set('offset', params.offset.toString());
        var req = new HttpRequest('GET', this.rootUrl + ("/api/query/completed-activity/" + params.completedActivityId), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param params The `AggregateQueryResourceService.FindCompletedActivityByIdUsingGETParams` containing the following parameters:
     *
     * - `completedActivityId`: completedActivityId
     *
     * - `unpaged`:
     *
     * - `sort.unsorted`:
     *
     * - `sort.sorted`:
     *
     * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     *
     * - `size`: Size of a page
     *
     * - `paged`:
     *
     * - `pageSize`:
     *
     * - `pageNumber`:
     *
     * - `page`: Page number of the requested page
     *
     * - `offset`:
     *
     * @return OK
     */
    AggregateQueryResourceService.prototype.findCompletedActivityByIdUsingGET = function (params) {
        return this.findCompletedActivityByIdUsingGETResponse(params).pipe(__map(function (_r) { return _r.body; }));
    };
    /**
     * @param params The `AggregateQueryResourceService.FindIncompletedActivityByPhoneNumberByQueryUsingGETParams` containing the following parameters:
     *
     * - `phoneNumber`: phoneNumber
     *
     * - `unpaged`:
     *
     * - `sort.unsorted`:
     *
     * - `sort.sorted`:
     *
     * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     *
     * - `size`: Size of a page
     *
     * - `paged`:
     *
     * - `pageSize`:
     *
     * - `pageNumber`:
     *
     * - `page`: Page number of the requested page
     *
     * - `offset`:
     *
     * @return OK
     */
    AggregateQueryResourceService.prototype.findIncompletedActivityByPhoneNumberByQueryUsingGETResponse = function (params) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        if (params.unpaged != null)
            __params = __params.set('unpaged', params.unpaged.toString());
        if (params.sortUnsorted != null)
            __params = __params.set('sort.unsorted', params.sortUnsorted.toString());
        if (params.sortSorted != null)
            __params = __params.set('sort.sorted', params.sortSorted.toString());
        (params.sort || []).forEach(function (val) { if (val != null)
            __params = __params.append('sort', val.toString()); });
        if (params.size != null)
            __params = __params.set('size', params.size.toString());
        if (params.paged != null)
            __params = __params.set('paged', params.paged.toString());
        if (params.pageSize != null)
            __params = __params.set('pageSize', params.pageSize.toString());
        if (params.pageNumber != null)
            __params = __params.set('pageNumber', params.pageNumber.toString());
        if (params.page != null)
            __params = __params.set('page', params.page.toString());
        if (params.offset != null)
            __params = __params.set('offset', params.offset.toString());
        var req = new HttpRequest('GET', this.rootUrl + ("/api/query/incompleted-activity-by-phone-number/" + params.phoneNumber), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param params The `AggregateQueryResourceService.FindIncompletedActivityByPhoneNumberByQueryUsingGETParams` containing the following parameters:
     *
     * - `phoneNumber`: phoneNumber
     *
     * - `unpaged`:
     *
     * - `sort.unsorted`:
     *
     * - `sort.sorted`:
     *
     * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     *
     * - `size`: Size of a page
     *
     * - `paged`:
     *
     * - `pageSize`:
     *
     * - `pageNumber`:
     *
     * - `page`: Page number of the requested page
     *
     * - `offset`:
     *
     * @return OK
     */
    AggregateQueryResourceService.prototype.findIncompletedActivityByPhoneNumberByQueryUsingGET = function (params) {
        return this.findIncompletedActivityByPhoneNumberByQueryUsingGETResponse(params).pipe(__map(function (_r) { return _r.body; }));
    };
    /**
     * @param params The `AggregateQueryResourceService.FindIncompletedActivityByRegisteredUserIdByQueryUsingGETParams` containing the following parameters:
     *
     * - `registeredUserId`: registeredUserId
     *
     * - `unpaged`:
     *
     * - `sort.unsorted`:
     *
     * - `sort.sorted`:
     *
     * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     *
     * - `size`: Size of a page
     *
     * - `paged`:
     *
     * - `pageSize`:
     *
     * - `pageNumber`:
     *
     * - `page`: Page number of the requested page
     *
     * - `offset`:
     *
     * @return OK
     */
    AggregateQueryResourceService.prototype.findIncompletedActivityByRegisteredUserIdByQueryUsingGETResponse = function (params) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        if (params.unpaged != null)
            __params = __params.set('unpaged', params.unpaged.toString());
        if (params.sortUnsorted != null)
            __params = __params.set('sort.unsorted', params.sortUnsorted.toString());
        if (params.sortSorted != null)
            __params = __params.set('sort.sorted', params.sortSorted.toString());
        (params.sort || []).forEach(function (val) { if (val != null)
            __params = __params.append('sort', val.toString()); });
        if (params.size != null)
            __params = __params.set('size', params.size.toString());
        if (params.paged != null)
            __params = __params.set('paged', params.paged.toString());
        if (params.pageSize != null)
            __params = __params.set('pageSize', params.pageSize.toString());
        if (params.pageNumber != null)
            __params = __params.set('pageNumber', params.pageNumber.toString());
        if (params.page != null)
            __params = __params.set('page', params.page.toString());
        if (params.offset != null)
            __params = __params.set('offset', params.offset.toString());
        var req = new HttpRequest('GET', this.rootUrl + ("/api/query/incompleted-activity-by-registered-user/" + params.registeredUserId), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param params The `AggregateQueryResourceService.FindIncompletedActivityByRegisteredUserIdByQueryUsingGETParams` containing the following parameters:
     *
     * - `registeredUserId`: registeredUserId
     *
     * - `unpaged`:
     *
     * - `sort.unsorted`:
     *
     * - `sort.sorted`:
     *
     * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     *
     * - `size`: Size of a page
     *
     * - `paged`:
     *
     * - `pageSize`:
     *
     * - `pageNumber`:
     *
     * - `page`: Page number of the requested page
     *
     * - `offset`:
     *
     * @return OK
     */
    AggregateQueryResourceService.prototype.findIncompletedActivityByRegisteredUserIdByQueryUsingGET = function (params) {
        return this.findIncompletedActivityByRegisteredUserIdByQueryUsingGETResponse(params).pipe(__map(function (_r) { return _r.body; }));
    };
    /**
     * @param activityId activityId
     * @return OK
     */
    AggregateQueryResourceService.prototype.getInstructionVideoByActivityIdUsingGETResponse = function (activityId) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        var req = new HttpRequest('GET', this.rootUrl + ("/api/query/instruction-video-by-activityId/" + activityId), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param activityId activityId
     * @return OK
     */
    AggregateQueryResourceService.prototype.getInstructionVideoByActivityIdUsingGET = function (activityId) {
        return this.getInstructionVideoByActivityIdUsingGETResponse(activityId).pipe(__map(function (_r) { return _r.body; }));
    };
    /**
     * @param userId userId
     * @return OK
     */
    AggregateQueryResourceService.prototype.getRegisteredUserByUserIdUsingGETResponse = function (userId) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        var req = new HttpRequest('GET', this.rootUrl + ("/api/query/registered-user-by-userId/" + userId), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param userId userId
     * @return OK
     */
    AggregateQueryResourceService.prototype.getRegisteredUserByUserIdUsingGET = function (userId) {
        return this.getRegisteredUserByUserIdUsingGETResponse(userId).pipe(__map(function (_r) { return _r.body; }));
    };
    /**
     * @param params The `AggregateQueryResourceService.GetAllRegisteredUsersUsingGETParams` containing the following parameters:
     *
     * - `unpaged`:
     *
     * - `sort.unsorted`:
     *
     * - `sort.sorted`:
     *
     * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     *
     * - `size`: Size of a page
     *
     * - `paged`:
     *
     * - `pageSize`:
     *
     * - `pageNumber`:
     *
     * - `page`: Page number of the requested page
     *
     * - `offset`:
     *
     * @return OK
     */
    AggregateQueryResourceService.prototype.getAllRegisteredUsersUsingGETResponse = function (params) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        if (params.unpaged != null)
            __params = __params.set('unpaged', params.unpaged.toString());
        if (params.sortUnsorted != null)
            __params = __params.set('sort.unsorted', params.sortUnsorted.toString());
        if (params.sortSorted != null)
            __params = __params.set('sort.sorted', params.sortSorted.toString());
        (params.sort || []).forEach(function (val) { if (val != null)
            __params = __params.append('sort', val.toString()); });
        if (params.size != null)
            __params = __params.set('size', params.size.toString());
        if (params.paged != null)
            __params = __params.set('paged', params.paged.toString());
        if (params.pageSize != null)
            __params = __params.set('pageSize', params.pageSize.toString());
        if (params.pageNumber != null)
            __params = __params.set('pageNumber', params.pageNumber.toString());
        if (params.page != null)
            __params = __params.set('page', params.page.toString());
        if (params.offset != null)
            __params = __params.set('offset', params.offset.toString());
        var req = new HttpRequest('GET', this.rootUrl + "/api/query/registered-users", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param params The `AggregateQueryResourceService.GetAllRegisteredUsersUsingGETParams` containing the following parameters:
     *
     * - `unpaged`:
     *
     * - `sort.unsorted`:
     *
     * - `sort.sorted`:
     *
     * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     *
     * - `size`: Size of a page
     *
     * - `paged`:
     *
     * - `pageSize`:
     *
     * - `pageNumber`:
     *
     * - `page`: Page number of the requested page
     *
     * - `offset`:
     *
     * @return OK
     */
    AggregateQueryResourceService.prototype.getAllRegisteredUsersUsingGET = function (params) {
        return this.getAllRegisteredUsersUsingGETResponse(params).pipe(__map(function (_r) { return _r.body; }));
    };
    /**
     * @param phoneNumber phoneNumber
     * @return OK
     */
    AggregateQueryResourceService.prototype.getRegisteredUserByPhoneNumberUsingGETResponse = function (phoneNumber) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        var req = new HttpRequest('GET', this.rootUrl + ("/api/query/registered-users-by-phonenumber/" + phoneNumber), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param phoneNumber phoneNumber
     * @return OK
     */
    AggregateQueryResourceService.prototype.getRegisteredUserByPhoneNumberUsingGET = function (phoneNumber) {
        return this.getRegisteredUserByPhoneNumberUsingGETResponse(phoneNumber).pipe(__map(function (_r) { return _r.body; }));
    };
    /**
     * @param id id
     * @return OK
     */
    AggregateQueryResourceService.prototype.getRegisteredUserUsingGETResponse = function (id) {
        var __params = this.newParams();
        var __headers = new HttpHeaders();
        var __body = null;
        var req = new HttpRequest('GET', this.rootUrl + ("/api/query/registered-users/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(__filter(function (_r) { return _r instanceof HttpResponse; }), __map(function (_r) {
            return _r;
        }));
    };
    /**
     * @param id id
     * @return OK
     */
    AggregateQueryResourceService.prototype.getRegisteredUserUsingGET = function (id) {
        return this.getRegisteredUserUsingGETResponse(id).pipe(__map(function (_r) { return _r.body; }));
    };
    AggregateQueryResourceService.getAllActivitiesUsingGETPath = '/api/query/activities';
    AggregateQueryResourceService.getActivityByIdUsingGETPath = '/api/query/activity/{activityId}';
    AggregateQueryResourceService.findAllCompletedActivityMediasByRegisteredUserIdUsingGETPath = '/api/query/all-completed-activity-media/{registeredUserId}';
    AggregateQueryResourceService.findCompletedActivityByRegisteredUserPhoneNumberUsingGETPath = '/api/query/completed-activity-by-phonenumber/{phoneNumber}';
    AggregateQueryResourceService.findCompletedActivityByRegisteredUserIdUsingGETPath = '/api/query/completed-activity-by-registered-user/{registeredUserId}';
    AggregateQueryResourceService.findCompletedActivityByIdUsingGETPath = '/api/query/completed-activity/{completedActivityId}';
    AggregateQueryResourceService.findIncompletedActivityByPhoneNumberByQueryUsingGETPath = '/api/query/incompleted-activity-by-phone-number/{phoneNumber}';
    AggregateQueryResourceService.findIncompletedActivityByRegisteredUserIdByQueryUsingGETPath = '/api/query/incompleted-activity-by-registered-user/{registeredUserId}';
    AggregateQueryResourceService.getInstructionVideoByActivityIdUsingGETPath = '/api/query/instruction-video-by-activityId/{activityId}';
    AggregateQueryResourceService.getRegisteredUserByUserIdUsingGETPath = '/api/query/registered-user-by-userId/{userId}';
    AggregateQueryResourceService.getAllRegisteredUsersUsingGETPath = '/api/query/registered-users';
    AggregateQueryResourceService.getRegisteredUserByPhoneNumberUsingGETPath = '/api/query/registered-users-by-phonenumber/{phoneNumber}';
    AggregateQueryResourceService.getRegisteredUserUsingGETPath = '/api/query/registered-users/{id}';
    AggregateQueryResourceService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root',
        }),
        tslib_1.__metadata("design:paramtypes", [__Configuration,
            HttpClient])
    ], AggregateQueryResourceService);
    return AggregateQueryResourceService;
}(__BaseService));
export { AggregateQueryResourceService };
//# sourceMappingURL=aggregate-query-resource.service.js.map
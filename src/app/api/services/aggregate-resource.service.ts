/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ActivityModel } from '../models/activity-model';
import { CompletedActivityModel } from '../models/completed-activity-model';
import { InstructionVideoModel } from '../models/instruction-video-model';
import { RegisteredUserModel } from '../models/registered-user-model';

/**
 * Aggregate Resource
 */
@Injectable({
  providedIn: 'root',
})
class AggregateResourceService extends __BaseService {
  static readonly getAllActivitiesUsingGETPath = '/api/activities';
  static readonly getActivityByIdUsingGETPath = '/api/activity/{activityId}';
  static readonly createCompletedActivityUsingPOSTPath = '/api/completed-activities';
  static readonly findCompletedActivityByRegisteredUserPhoneNumberUsingGETPath = '/api/completed-activity-by-phonenumber/{phoneNumber}';
  static readonly findCompletedActivityByRegisteredUserIdUsingGETPath = '/api/completed-activity-by-registered-user/{registeredUserId}';
  static readonly findCompletedActivityByIdUsingGETPath = '/api/completed-activity/{completedActivityId}';
  static readonly findIncompletedActivityByRegisteredUserPhoneNumberUsingGETPath = '/api/incompleted-activity-by-phonenumber/{phoneNumber}';
  static readonly findIncompletedActivityByRegisteredUserIdUsingGETPath = '/api/incompleted-activity-by-registered-user/{registeredUserId}';
  static readonly getInstructionVideoByActivityIdUsingGETPath = '/api/instruction-video-by-activityId/{activityId}';
  static readonly getAllRegisteredUsersUsingGETPath = '/api/registered-users';
  static readonly createRegisteredUserUsingPOSTPath = '/api/registered-users';
  static readonly updateRegisteredUserUsingPUTPath = '/api/registered-users';
  static readonly getRegisteredUserByPhoneNumberUsingGETPath = '/api/registered-users-by-phonenumber/{phoneNumber}';
  static readonly getRegisteredUserUsingGETPath = '/api/registered-users/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `AggregateResourceService.GetAllActivitiesUsingGETParams` containing the following parameters:
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
  getAllActivitiesUsingGETResponse(params: AggregateResourceService.GetAllActivitiesUsingGETParams): __Observable<__StrictHttpResponse<Array<ActivityModel>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.unpaged != null) __params = __params.set('unpaged', params.unpaged.toString());
    if (params.sortUnsorted != null) __params = __params.set('sort.unsorted', params.sortUnsorted.toString());
    if (params.sortSorted != null) __params = __params.set('sort.sorted', params.sortSorted.toString());
    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.paged != null) __params = __params.set('paged', params.paged.toString());
    if (params.pageSize != null) __params = __params.set('pageSize', params.pageSize.toString());
    if (params.pageNumber != null) __params = __params.set('pageNumber', params.pageNumber.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/activities`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ActivityModel>>;
      })
    );
  }
  /**
   * @param params The `AggregateResourceService.GetAllActivitiesUsingGETParams` containing the following parameters:
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
  getAllActivitiesUsingGET(params: AggregateResourceService.GetAllActivitiesUsingGETParams): __Observable<Array<ActivityModel>> {
    return this.getAllActivitiesUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<ActivityModel>)
    );
  }

  /**
   * @param params The `AggregateResourceService.GetActivityByIdUsingGETParams` containing the following parameters:
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
  getActivityByIdUsingGETResponse(params: AggregateResourceService.GetActivityByIdUsingGETParams): __Observable<__StrictHttpResponse<ActivityModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.unpaged != null) __params = __params.set('unpaged', params.unpaged.toString());
    if (params.sortUnsorted != null) __params = __params.set('sort.unsorted', params.sortUnsorted.toString());
    if (params.sortSorted != null) __params = __params.set('sort.sorted', params.sortSorted.toString());
    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.paged != null) __params = __params.set('paged', params.paged.toString());
    if (params.pageSize != null) __params = __params.set('pageSize', params.pageSize.toString());
    if (params.pageNumber != null) __params = __params.set('pageNumber', params.pageNumber.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/activity/${params.activityId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ActivityModel>;
      })
    );
  }
  /**
   * @param params The `AggregateResourceService.GetActivityByIdUsingGETParams` containing the following parameters:
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
  getActivityByIdUsingGET(params: AggregateResourceService.GetActivityByIdUsingGETParams): __Observable<ActivityModel> {
    return this.getActivityByIdUsingGETResponse(params).pipe(
      __map(_r => _r.body as ActivityModel)
    );
  }

  /**
   * @param completedActivityModel completedActivityModel
   * @return OK
   */
  createCompletedActivityUsingPOSTResponse(completedActivityModel: CompletedActivityModel): __Observable<__StrictHttpResponse<CompletedActivityModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __headers.append('Content-Type', 'multipart/form-data');
    let __formData = new FormData();
    __body = __formData;
   if(completedActivityModel !== null && typeof completedActivityModel !== "undefined") { __formData.append('completedActivityModel', JSON.stringify(completedActivityModel));}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/completed-activities`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CompletedActivityModel>;
      })
    );
  }
  /**
   * @param completedActivityModel completedActivityModel
   * @return OK
   */
  createCompletedActivityUsingPOST(completedActivityModel: CompletedActivityModel): __Observable<CompletedActivityModel> {
    return this.createCompletedActivityUsingPOSTResponse(completedActivityModel).pipe(
      __map(_r => _r.body as CompletedActivityModel)
    );
  }

  /**
   * @param params The `AggregateResourceService.FindCompletedActivityByRegisteredUserPhoneNumberUsingGETParams` containing the following parameters:
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
  findCompletedActivityByRegisteredUserPhoneNumberUsingGETResponse(params: AggregateResourceService.FindCompletedActivityByRegisteredUserPhoneNumberUsingGETParams): __Observable<__StrictHttpResponse<Array<CompletedActivityModel>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.unpaged != null) __params = __params.set('unpaged', params.unpaged.toString());
    if (params.sortUnsorted != null) __params = __params.set('sort.unsorted', params.sortUnsorted.toString());
    if (params.sortSorted != null) __params = __params.set('sort.sorted', params.sortSorted.toString());
    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.paged != null) __params = __params.set('paged', params.paged.toString());
    if (params.pageSize != null) __params = __params.set('pageSize', params.pageSize.toString());
    if (params.pageNumber != null) __params = __params.set('pageNumber', params.pageNumber.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/completed-activity-by-phonenumber/${params.phoneNumber}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CompletedActivityModel>>;
      })
    );
  }
  /**
   * @param params The `AggregateResourceService.FindCompletedActivityByRegisteredUserPhoneNumberUsingGETParams` containing the following parameters:
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
  findCompletedActivityByRegisteredUserPhoneNumberUsingGET(params: AggregateResourceService.FindCompletedActivityByRegisteredUserPhoneNumberUsingGETParams): __Observable<Array<CompletedActivityModel>> {
    return this.findCompletedActivityByRegisteredUserPhoneNumberUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<CompletedActivityModel>)
    );
  }

  /**
   * @param params The `AggregateResourceService.FindCompletedActivityByRegisteredUserIdUsingGETParams` containing the following parameters:
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
  findCompletedActivityByRegisteredUserIdUsingGETResponse(params: AggregateResourceService.FindCompletedActivityByRegisteredUserIdUsingGETParams): __Observable<__StrictHttpResponse<Array<CompletedActivityModel>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.unpaged != null) __params = __params.set('unpaged', params.unpaged.toString());
    if (params.sortUnsorted != null) __params = __params.set('sort.unsorted', params.sortUnsorted.toString());
    if (params.sortSorted != null) __params = __params.set('sort.sorted', params.sortSorted.toString());
    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.paged != null) __params = __params.set('paged', params.paged.toString());
    if (params.pageSize != null) __params = __params.set('pageSize', params.pageSize.toString());
    if (params.pageNumber != null) __params = __params.set('pageNumber', params.pageNumber.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/completed-activity-by-registered-user/${params.registeredUserId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CompletedActivityModel>>;
      })
    );
  }
  /**
   * @param params The `AggregateResourceService.FindCompletedActivityByRegisteredUserIdUsingGETParams` containing the following parameters:
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
  findCompletedActivityByRegisteredUserIdUsingGET(params: AggregateResourceService.FindCompletedActivityByRegisteredUserIdUsingGETParams): __Observable<Array<CompletedActivityModel>> {
    return this.findCompletedActivityByRegisteredUserIdUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<CompletedActivityModel>)
    );
  }

  /**
   * @param params The `AggregateResourceService.FindCompletedActivityByIdUsingGETParams` containing the following parameters:
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
  findCompletedActivityByIdUsingGETResponse(params: AggregateResourceService.FindCompletedActivityByIdUsingGETParams): __Observable<__StrictHttpResponse<CompletedActivityModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.unpaged != null) __params = __params.set('unpaged', params.unpaged.toString());
    if (params.sortUnsorted != null) __params = __params.set('sort.unsorted', params.sortUnsorted.toString());
    if (params.sortSorted != null) __params = __params.set('sort.sorted', params.sortSorted.toString());
    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.paged != null) __params = __params.set('paged', params.paged.toString());
    if (params.pageSize != null) __params = __params.set('pageSize', params.pageSize.toString());
    if (params.pageNumber != null) __params = __params.set('pageNumber', params.pageNumber.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/completed-activity/${params.completedActivityId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CompletedActivityModel>;
      })
    );
  }
  /**
   * @param params The `AggregateResourceService.FindCompletedActivityByIdUsingGETParams` containing the following parameters:
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
  findCompletedActivityByIdUsingGET(params: AggregateResourceService.FindCompletedActivityByIdUsingGETParams): __Observable<CompletedActivityModel> {
    return this.findCompletedActivityByIdUsingGETResponse(params).pipe(
      __map(_r => _r.body as CompletedActivityModel)
    );
  }

  /**
   * @param params The `AggregateResourceService.FindIncompletedActivityByRegisteredUserPhoneNumberUsingGETParams` containing the following parameters:
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
  findIncompletedActivityByRegisteredUserPhoneNumberUsingGETResponse(params: AggregateResourceService.FindIncompletedActivityByRegisteredUserPhoneNumberUsingGETParams): __Observable<__StrictHttpResponse<Array<ActivityModel>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.unpaged != null) __params = __params.set('unpaged', params.unpaged.toString());
    if (params.sortUnsorted != null) __params = __params.set('sort.unsorted', params.sortUnsorted.toString());
    if (params.sortSorted != null) __params = __params.set('sort.sorted', params.sortSorted.toString());
    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.paged != null) __params = __params.set('paged', params.paged.toString());
    if (params.pageSize != null) __params = __params.set('pageSize', params.pageSize.toString());
    if (params.pageNumber != null) __params = __params.set('pageNumber', params.pageNumber.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/incompleted-activity-by-phonenumber/${params.phoneNumber}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ActivityModel>>;
      })
    );
  }
  /**
   * @param params The `AggregateResourceService.FindIncompletedActivityByRegisteredUserPhoneNumberUsingGETParams` containing the following parameters:
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
  findIncompletedActivityByRegisteredUserPhoneNumberUsingGET(params: AggregateResourceService.FindIncompletedActivityByRegisteredUserPhoneNumberUsingGETParams): __Observable<Array<ActivityModel>> {
    return this.findIncompletedActivityByRegisteredUserPhoneNumberUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<ActivityModel>)
    );
  }

  /**
   * @param params The `AggregateResourceService.FindIncompletedActivityByRegisteredUserIdUsingGETParams` containing the following parameters:
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
  findIncompletedActivityByRegisteredUserIdUsingGETResponse(params: AggregateResourceService.FindIncompletedActivityByRegisteredUserIdUsingGETParams): __Observable<__StrictHttpResponse<Array<ActivityModel>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.unpaged != null) __params = __params.set('unpaged', params.unpaged.toString());
    if (params.sortUnsorted != null) __params = __params.set('sort.unsorted', params.sortUnsorted.toString());
    if (params.sortSorted != null) __params = __params.set('sort.sorted', params.sortSorted.toString());
    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.paged != null) __params = __params.set('paged', params.paged.toString());
    if (params.pageSize != null) __params = __params.set('pageSize', params.pageSize.toString());
    if (params.pageNumber != null) __params = __params.set('pageNumber', params.pageNumber.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/incompleted-activity-by-registered-user/${params.registeredUserId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ActivityModel>>;
      })
    );
  }
  /**
   * @param params The `AggregateResourceService.FindIncompletedActivityByRegisteredUserIdUsingGETParams` containing the following parameters:
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
  findIncompletedActivityByRegisteredUserIdUsingGET(params: AggregateResourceService.FindIncompletedActivityByRegisteredUserIdUsingGETParams): __Observable<Array<ActivityModel>> {
    return this.findIncompletedActivityByRegisteredUserIdUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<ActivityModel>)
    );
  }

  /**
   * @param activityId activityId
   * @return OK
   */
  getInstructionVideoByActivityIdUsingGETResponse(activityId: number): __Observable<__StrictHttpResponse<InstructionVideoModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/instruction-video-by-activityId/${activityId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<InstructionVideoModel>;
      })
    );
  }
  /**
   * @param activityId activityId
   * @return OK
   */
  getInstructionVideoByActivityIdUsingGET(activityId: number): __Observable<InstructionVideoModel> {
    return this.getInstructionVideoByActivityIdUsingGETResponse(activityId).pipe(
      __map(_r => _r.body as InstructionVideoModel)
    );
  }

  /**
   * @param params The `AggregateResourceService.GetAllRegisteredUsersUsingGETParams` containing the following parameters:
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
  getAllRegisteredUsersUsingGETResponse(params: AggregateResourceService.GetAllRegisteredUsersUsingGETParams): __Observable<__StrictHttpResponse<Array<RegisteredUserModel>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.unpaged != null) __params = __params.set('unpaged', params.unpaged.toString());
    if (params.sortUnsorted != null) __params = __params.set('sort.unsorted', params.sortUnsorted.toString());
    if (params.sortSorted != null) __params = __params.set('sort.sorted', params.sortSorted.toString());
    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.paged != null) __params = __params.set('paged', params.paged.toString());
    if (params.pageSize != null) __params = __params.set('pageSize', params.pageSize.toString());
    if (params.pageNumber != null) __params = __params.set('pageNumber', params.pageNumber.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/registered-users`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<RegisteredUserModel>>;
      })
    );
  }
  /**
   * @param params The `AggregateResourceService.GetAllRegisteredUsersUsingGETParams` containing the following parameters:
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
  getAllRegisteredUsersUsingGET(params: AggregateResourceService.GetAllRegisteredUsersUsingGETParams): __Observable<Array<RegisteredUserModel>> {
    return this.getAllRegisteredUsersUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<RegisteredUserModel>)
    );
  }

  /**
   * @param registeredUserModel registeredUserModel
   * @return OK
   */
  createRegisteredUserUsingPOSTResponse(registeredUserModel: RegisteredUserModel): __Observable<__StrictHttpResponse<RegisteredUserModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = registeredUserModel;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/registered-users`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RegisteredUserModel>;
      })
    );
  }
  /**
   * @param registeredUserModel registeredUserModel
   * @return OK
   */
  createRegisteredUserUsingPOST(registeredUserModel: RegisteredUserModel): __Observable<RegisteredUserModel> {
    return this.createRegisteredUserUsingPOSTResponse(registeredUserModel).pipe(
      __map(_r => _r.body as RegisteredUserModel)
    );
  }

  /**
   * @param registeredUserModel registeredUserModel
   * @return OK
   */
  updateRegisteredUserUsingPUTResponse(registeredUserModel: RegisteredUserModel): __Observable<__StrictHttpResponse<RegisteredUserModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = registeredUserModel;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/registered-users`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RegisteredUserModel>;
      })
    );
  }
  /**
   * @param registeredUserModel registeredUserModel
   * @return OK
   */
  updateRegisteredUserUsingPUT(registeredUserModel: RegisteredUserModel): __Observable<RegisteredUserModel> {
    return this.updateRegisteredUserUsingPUTResponse(registeredUserModel).pipe(
      __map(_r => _r.body as RegisteredUserModel)
    );
  }

  /**
   * @param phoneNumber phoneNumber
   * @return OK
   */
  getRegisteredUserByPhoneNumberUsingGETResponse(phoneNumber: number): __Observable<__StrictHttpResponse<RegisteredUserModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/registered-users-by-phonenumber/${phoneNumber}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RegisteredUserModel>;
      })
    );
  }
  /**
   * @param phoneNumber phoneNumber
   * @return OK
   */
  getRegisteredUserByPhoneNumberUsingGET(phoneNumber: number): __Observable<RegisteredUserModel> {
    return this.getRegisteredUserByPhoneNumberUsingGETResponse(phoneNumber).pipe(
      __map(_r => _r.body as RegisteredUserModel)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  getRegisteredUserUsingGETResponse(id: number): __Observable<__StrictHttpResponse<RegisteredUserModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/registered-users/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RegisteredUserModel>;
      })
    );
  }
  /**
   * @param id id
   * @return OK
   */
  getRegisteredUserUsingGET(id: number): __Observable<RegisteredUserModel> {
    return this.getRegisteredUserUsingGETResponse(id).pipe(
      __map(_r => _r.body as RegisteredUserModel)
    );
  }
}

module AggregateResourceService {

  /**
   * Parameters for getAllActivitiesUsingGET
   */
  export interface GetAllActivitiesUsingGETParams {
    unpaged?: boolean;
    sortUnsorted?: boolean;
    sortSorted?: boolean;

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;
    paged?: boolean;
    pageSize?: number;
    pageNumber?: number;

    /**
     * Page number of the requested page
     */
    page?: number;
    offset?: number;
  }

  /**
   * Parameters for getActivityByIdUsingGET
   */
  export interface GetActivityByIdUsingGETParams {

    /**
     * activityId
     */
    activityId: number;
    unpaged?: boolean;
    sortUnsorted?: boolean;
    sortSorted?: boolean;

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;
    paged?: boolean;
    pageSize?: number;
    pageNumber?: number;

    /**
     * Page number of the requested page
     */
    page?: number;
    offset?: number;
  }

  /**
   * Parameters for findCompletedActivityByRegisteredUserPhoneNumberUsingGET
   */
  export interface FindCompletedActivityByRegisteredUserPhoneNumberUsingGETParams {

    /**
     * phoneNumber
     */
    phoneNumber: number;
    unpaged?: boolean;
    sortUnsorted?: boolean;
    sortSorted?: boolean;

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;
    paged?: boolean;
    pageSize?: number;
    pageNumber?: number;

    /**
     * Page number of the requested page
     */
    page?: number;
    offset?: number;
  }

  /**
   * Parameters for findCompletedActivityByRegisteredUserIdUsingGET
   */
  export interface FindCompletedActivityByRegisteredUserIdUsingGETParams {

    /**
     * registeredUserId
     */
    registeredUserId: number;
    unpaged?: boolean;
    sortUnsorted?: boolean;
    sortSorted?: boolean;

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;
    paged?: boolean;
    pageSize?: number;
    pageNumber?: number;

    /**
     * Page number of the requested page
     */
    page?: number;
    offset?: number;
  }

  /**
   * Parameters for findCompletedActivityByIdUsingGET
   */
  export interface FindCompletedActivityByIdUsingGETParams {

    /**
     * completedActivityId
     */
    completedActivityId: number;
    unpaged?: boolean;
    sortUnsorted?: boolean;
    sortSorted?: boolean;

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;
    paged?: boolean;
    pageSize?: number;
    pageNumber?: number;

    /**
     * Page number of the requested page
     */
    page?: number;
    offset?: number;
  }

  /**
   * Parameters for findIncompletedActivityByRegisteredUserPhoneNumberUsingGET
   */
  export interface FindIncompletedActivityByRegisteredUserPhoneNumberUsingGETParams {

    /**
     * phoneNumber
     */
    phoneNumber: number;
    unpaged?: boolean;
    sortUnsorted?: boolean;
    sortSorted?: boolean;

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;
    paged?: boolean;
    pageSize?: number;
    pageNumber?: number;

    /**
     * Page number of the requested page
     */
    page?: number;
    offset?: number;
  }

  /**
   * Parameters for findIncompletedActivityByRegisteredUserIdUsingGET
   */
  export interface FindIncompletedActivityByRegisteredUserIdUsingGETParams {

    /**
     * registeredUserId
     */
    registeredUserId: number;
    unpaged?: boolean;
    sortUnsorted?: boolean;
    sortSorted?: boolean;

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;
    paged?: boolean;
    pageSize?: number;
    pageNumber?: number;

    /**
     * Page number of the requested page
     */
    page?: number;
    offset?: number;
  }

  /**
   * Parameters for getAllRegisteredUsersUsingGET
   */
  export interface GetAllRegisteredUsersUsingGETParams {
    unpaged?: boolean;
    sortUnsorted?: boolean;
    sortSorted?: boolean;

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;
    paged?: boolean;
    pageSize?: number;
    pageNumber?: number;

    /**
     * Page number of the requested page
     */
    page?: number;
    offset?: number;
  }
}

export { AggregateResourceService }

/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ActivityModel } from '../models/activity-model';
import { MediaModel } from '../models/media-model';
import { CompletedActivityModel } from '../models/completed-activity-model';
import { InstructionVideoModel } from '../models/instruction-video-model';
import { RegisteredUserModel } from '../models/registered-user-model';

/**
 * Aggregate Query Resource
 */
@Injectable({
  providedIn: 'root',
})
class AggregateQueryResourceService extends __BaseService {
  static readonly getAllActivitiesUsingGETPath = '/api/query/activities';
  static readonly getActivityByIdUsingGETPath = '/api/query/activity/{activityId}';
  static readonly findAllCompletedActivityMediasByRegisteredUserIdUsingGETPath = '/api/query/all-completed-activity-media/{registeredUserId}';
  static readonly findCompletedActivityByRegisteredUserPhoneNumberUsingGETPath = '/api/query/completed-activity-by-phonenumber/{phoneNumber}';
  static readonly findCompletedActivityByRegisteredUserIdUsingGETPath = '/api/query/completed-activity-by-registered-user/{registeredUserId}';
  static readonly findCompletedActivityByIdUsingGETPath = '/api/query/completed-activity/{completedActivityId}';
  static readonly findIncompletedActivityByPhoneNumberByQueryUsingGETPath = '/api/query/incompleted-activity-by-phone-number/{phoneNumber}';
  static readonly findIncompletedActivityByRegisteredUserIdByQueryUsingGETPath = '/api/query/incompleted-activity-by-registered-user/{registeredUserId}';
  static readonly getInstructionVideoByActivityIdUsingGETPath = '/api/query/instruction-video-by-activityId/{activityId}';
  static readonly getRegisteredUserByUserIdUsingGETPath = '/api/query/registered-user-by-userId/{userId}';
  static readonly getAllRegisteredUsersUsingGETPath = '/api/query/registered-users';
  static readonly getRegisteredUserByPhoneNumberUsingGETPath = '/api/query/registered-users-by-phonenumber/{phoneNumber}';
  static readonly getRegisteredUserUsingGETPath = '/api/query/registered-users/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
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
  getAllActivitiesUsingGETResponse(params: AggregateQueryResourceService.GetAllActivitiesUsingGETParams): __Observable<__StrictHttpResponse<Array<ActivityModel>>> {
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
      this.rootUrl + `/api/query/activities`,
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
  getAllActivitiesUsingGET(params: AggregateQueryResourceService.GetAllActivitiesUsingGETParams): __Observable<Array<ActivityModel>> {
    return this.getAllActivitiesUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<ActivityModel>)
    );
  }

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
  getActivityByIdUsingGETResponse(params: AggregateQueryResourceService.GetActivityByIdUsingGETParams): __Observable<__StrictHttpResponse<ActivityModel>> {
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
      this.rootUrl + `/api/query/activity/${params.activityId}`,
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
  getActivityByIdUsingGET(params: AggregateQueryResourceService.GetActivityByIdUsingGETParams): __Observable<ActivityModel> {
    return this.getActivityByIdUsingGETResponse(params).pipe(
      __map(_r => _r.body as ActivityModel)
    );
  }

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
  findAllCompletedActivityMediasByRegisteredUserIdUsingGETResponse(params: AggregateQueryResourceService.FindAllCompletedActivityMediasByRegisteredUserIdUsingGETParams): __Observable<__StrictHttpResponse<Array<MediaModel>>> {
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
      this.rootUrl + `/api/query/all-completed-activity-media/${params.registeredUserId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<MediaModel>>;
      })
    );
  }
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
  findAllCompletedActivityMediasByRegisteredUserIdUsingGET(params: AggregateQueryResourceService.FindAllCompletedActivityMediasByRegisteredUserIdUsingGETParams): __Observable<Array<MediaModel>> {
    return this.findAllCompletedActivityMediasByRegisteredUserIdUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<MediaModel>)
    );
  }

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
  findCompletedActivityByRegisteredUserPhoneNumberUsingGETResponse(params: AggregateQueryResourceService.FindCompletedActivityByRegisteredUserPhoneNumberUsingGETParams): __Observable<__StrictHttpResponse<Array<CompletedActivityModel>>> {
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
      this.rootUrl + `/api/query/completed-activity-by-phonenumber/${params.phoneNumber}`,
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
  findCompletedActivityByRegisteredUserPhoneNumberUsingGET(params: AggregateQueryResourceService.FindCompletedActivityByRegisteredUserPhoneNumberUsingGETParams): __Observable<Array<CompletedActivityModel>> {
    return this.findCompletedActivityByRegisteredUserPhoneNumberUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<CompletedActivityModel>)
    );
  }

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
  findCompletedActivityByRegisteredUserIdUsingGETResponse(params: AggregateQueryResourceService.FindCompletedActivityByRegisteredUserIdUsingGETParams): __Observable<__StrictHttpResponse<Array<CompletedActivityModel>>> {
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
      this.rootUrl + `/api/query/completed-activity-by-registered-user/${params.registeredUserId}`,
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
  findCompletedActivityByRegisteredUserIdUsingGET(params: AggregateQueryResourceService.FindCompletedActivityByRegisteredUserIdUsingGETParams): __Observable<Array<CompletedActivityModel>> {
    return this.findCompletedActivityByRegisteredUserIdUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<CompletedActivityModel>)
    );
  }

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
  findCompletedActivityByIdUsingGETResponse(params: AggregateQueryResourceService.FindCompletedActivityByIdUsingGETParams): __Observable<__StrictHttpResponse<CompletedActivityModel>> {
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
      this.rootUrl + `/api/query/completed-activity/${params.completedActivityId}`,
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
  findCompletedActivityByIdUsingGET(params: AggregateQueryResourceService.FindCompletedActivityByIdUsingGETParams): __Observable<CompletedActivityModel> {
    return this.findCompletedActivityByIdUsingGETResponse(params).pipe(
      __map(_r => _r.body as CompletedActivityModel)
    );
  }

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
  findIncompletedActivityByPhoneNumberByQueryUsingGETResponse(params: AggregateQueryResourceService.FindIncompletedActivityByPhoneNumberByQueryUsingGETParams): __Observable<__StrictHttpResponse<Array<ActivityModel>>> {
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
      this.rootUrl + `/api/query/incompleted-activity-by-phone-number/${params.phoneNumber}`,
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
  findIncompletedActivityByPhoneNumberByQueryUsingGET(params: AggregateQueryResourceService.FindIncompletedActivityByPhoneNumberByQueryUsingGETParams): __Observable<Array<ActivityModel>> {
    return this.findIncompletedActivityByPhoneNumberByQueryUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<ActivityModel>)
    );
  }

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
  findIncompletedActivityByRegisteredUserIdByQueryUsingGETResponse(params: AggregateQueryResourceService.FindIncompletedActivityByRegisteredUserIdByQueryUsingGETParams): __Observable<__StrictHttpResponse<Array<ActivityModel>>> {
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
      this.rootUrl + `/api/query/incompleted-activity-by-registered-user/${params.registeredUserId}`,
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
  findIncompletedActivityByRegisteredUserIdByQueryUsingGET(params: AggregateQueryResourceService.FindIncompletedActivityByRegisteredUserIdByQueryUsingGETParams): __Observable<Array<ActivityModel>> {
    return this.findIncompletedActivityByRegisteredUserIdByQueryUsingGETResponse(params).pipe(
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
      this.rootUrl + `/api/query/instruction-video-by-activityId/${activityId}`,
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
   * @param userId userId
   * @return OK
   */
  getRegisteredUserByUserIdUsingGETResponse(userId: string): __Observable<__StrictHttpResponse<RegisteredUserModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/registered-user-by-userId/${userId}`,
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
   * @param userId userId
   * @return OK
   */
  getRegisteredUserByUserIdUsingGET(userId: string): __Observable<RegisteredUserModel> {
    return this.getRegisteredUserByUserIdUsingGETResponse(userId).pipe(
      __map(_r => _r.body as RegisteredUserModel)
    );
  }

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
  getAllRegisteredUsersUsingGETResponse(params: AggregateQueryResourceService.GetAllRegisteredUsersUsingGETParams): __Observable<__StrictHttpResponse<Array<RegisteredUserModel>>> {
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
      this.rootUrl + `/api/query/registered-users`,
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
  getAllRegisteredUsersUsingGET(params: AggregateQueryResourceService.GetAllRegisteredUsersUsingGETParams): __Observable<Array<RegisteredUserModel>> {
    return this.getAllRegisteredUsersUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<RegisteredUserModel>)
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
      this.rootUrl + `/api/query/registered-users-by-phonenumber/${phoneNumber}`,
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
      this.rootUrl + `/api/query/registered-users/${id}`,
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

module AggregateQueryResourceService {

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
   * Parameters for findAllCompletedActivityMediasByRegisteredUserIdUsingGET
   */
  export interface FindAllCompletedActivityMediasByRegisteredUserIdUsingGETParams {

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
   * Parameters for findIncompletedActivityByPhoneNumberByQueryUsingGET
   */
  export interface FindIncompletedActivityByPhoneNumberByQueryUsingGETParams {

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
   * Parameters for findIncompletedActivityByRegisteredUserIdByQueryUsingGET
   */
  export interface FindIncompletedActivityByRegisteredUserIdByQueryUsingGETParams {

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

export { AggregateQueryResourceService }

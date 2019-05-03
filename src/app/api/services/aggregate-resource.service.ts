/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ActivityDTO } from '../models/activity-dto';
import { CompletedActivityDTO } from '../models/completed-activity-dto';
import { RegisteredUserDTO } from '../models/registered-user-dto';

/**
 * Aggregate Resource
 */
@Injectable({
  providedIn: 'root',
})
class AggregateResourceService extends __BaseService {
  static readonly getAllActivitiesUsingGETPath = '/api/activity';
  static readonly getActivityByIdUsingGETPath = '/api/activity/{activityId}';
  static readonly createCompletedActivityUsingPOSTPath = '/api/completedActivity';
  static readonly findCompletedActivityByIdUsingGETPath = '/api/completedActivity/{completedActivityId}';
  static readonly findCompletedActivityByRegisteredUserIdUsingGETPath = '/api/completedActivity/{registeredUserId}';
  static readonly findInompletedActivityByRegisteredUserIdUsingGETPath = '/api/incompletedActivity/{registeredUserId}';
  static readonly createRegisteredUserUsingPOSTPath = '/api/registeredUser';
  static readonly updateRegisteredUserUsingPUTPath = '/api/registeredUser';
  static readonly getRegisteredUserUsingGETPath = '/api/registeredUser/{registeredUserId}';
  static readonly getAllRegisteredUsersUsingGETPath = '/api/registeredUsers';

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
  getAllActivitiesUsingGETResponse(params: AggregateResourceService.GetAllActivitiesUsingGETParams): __Observable<__StrictHttpResponse<Array<ActivityDTO>>> {
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
      this.rootUrl + `/api/activity`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ActivityDTO>>;
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
  getAllActivitiesUsingGET(params: AggregateResourceService.GetAllActivitiesUsingGETParams): __Observable<Array<ActivityDTO>> {
    return this.getAllActivitiesUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<ActivityDTO>)
    );
  }

  /**
   * @param activityId activityId
   * @return OK
   */
  getActivityByIdUsingGETResponse(activityId: number): __Observable<__StrictHttpResponse<ActivityDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/activity/${activityId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ActivityDTO>;
      })
    );
  }
  /**
   * @param activityId activityId
   * @return OK
   */
  getActivityByIdUsingGET(activityId: number): __Observable<ActivityDTO> {
    return this.getActivityByIdUsingGETResponse(activityId).pipe(
      __map(_r => _r.body as ActivityDTO)
    );
  }

  /**
   * @param completedActivityDTO completedActivityDTO
   * @return OK
   */
  createCompletedActivityUsingPOSTResponse(completedActivityDTO: CompletedActivityDTO): __Observable<__StrictHttpResponse<CompletedActivityDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __headers.append('Content-Type', 'multipart/form-data');
    let __formData = new FormData();
    __body = __formData;
   if(completedActivityDTO !== null && typeof completedActivityDTO !== "undefined") { __formData.append('completedActivityDTO', JSON.stringify(completedActivityDTO));}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/completedActivity`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CompletedActivityDTO>;
      })
    );
  }
  /**
   * @param completedActivityDTO completedActivityDTO
   * @return OK
   */
  createCompletedActivityUsingPOST(completedActivityDTO: CompletedActivityDTO): __Observable<CompletedActivityDTO> {
    return this.createCompletedActivityUsingPOSTResponse(completedActivityDTO).pipe(
      __map(_r => _r.body as CompletedActivityDTO)
    );
  }

  /**
   * @param completedActivityId completedActivityId
   * @return OK
   */
  findCompletedActivityByIdUsingGETResponse(completedActivityId: number): __Observable<__StrictHttpResponse<CompletedActivityDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/completedActivity/${completedActivityId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CompletedActivityDTO>;
      })
    );
  }
  /**
   * @param completedActivityId completedActivityId
   * @return OK
   */
  findCompletedActivityByIdUsingGET(completedActivityId: number): __Observable<CompletedActivityDTO> {
    return this.findCompletedActivityByIdUsingGETResponse(completedActivityId).pipe(
      __map(_r => _r.body as CompletedActivityDTO)
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
  findCompletedActivityByRegisteredUserIdUsingGETResponse(params: AggregateResourceService.FindCompletedActivityByRegisteredUserIdUsingGETParams): __Observable<__StrictHttpResponse<Array<CompletedActivityDTO>>> {
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
      this.rootUrl + `/api/completedActivity/${params.registeredUserId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CompletedActivityDTO>>;
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
  findCompletedActivityByRegisteredUserIdUsingGET(params: AggregateResourceService.FindCompletedActivityByRegisteredUserIdUsingGETParams): __Observable<Array<CompletedActivityDTO>> {
    return this.findCompletedActivityByRegisteredUserIdUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<CompletedActivityDTO>)
    );
  }

  /**
   * @param params The `AggregateResourceService.FindInompletedActivityByRegisteredUserIdUsingGETParams` containing the following parameters:
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
  findInompletedActivityByRegisteredUserIdUsingGETResponse(params: AggregateResourceService.FindInompletedActivityByRegisteredUserIdUsingGETParams): __Observable<__StrictHttpResponse<Array<ActivityDTO>>> {
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
      this.rootUrl + `/api/incompletedActivity/${params.registeredUserId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ActivityDTO>>;
      })
    );
  }
  /**
   * @param params The `AggregateResourceService.FindInompletedActivityByRegisteredUserIdUsingGETParams` containing the following parameters:
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
  findInompletedActivityByRegisteredUserIdUsingGET(params: AggregateResourceService.FindInompletedActivityByRegisteredUserIdUsingGETParams): __Observable<Array<ActivityDTO>> {
    return this.findInompletedActivityByRegisteredUserIdUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<ActivityDTO>)
    );
  }

  /**
   * @param registeredUserDTO registeredUserDTO
   * @return OK
   */
  createRegisteredUserUsingPOSTResponse(registeredUserDTO: RegisteredUserDTO): __Observable<__StrictHttpResponse<RegisteredUserDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = registeredUserDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/registeredUser`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RegisteredUserDTO>;
      })
    );
  }
  /**
   * @param registeredUserDTO registeredUserDTO
   * @return OK
   */
  createRegisteredUserUsingPOST(registeredUserDTO: RegisteredUserDTO): __Observable<RegisteredUserDTO> {
    return this.createRegisteredUserUsingPOSTResponse(registeredUserDTO).pipe(
      __map(_r => _r.body as RegisteredUserDTO)
    );
  }

  /**
   * @param registeredUserDTO registeredUserDTO
   * @return OK
   */
  updateRegisteredUserUsingPUTResponse(registeredUserDTO: RegisteredUserDTO): __Observable<__StrictHttpResponse<RegisteredUserDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = registeredUserDTO;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/registeredUser`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RegisteredUserDTO>;
      })
    );
  }
  /**
   * @param registeredUserDTO registeredUserDTO
   * @return OK
   */
  updateRegisteredUserUsingPUT(registeredUserDTO: RegisteredUserDTO): __Observable<RegisteredUserDTO> {
    return this.updateRegisteredUserUsingPUTResponse(registeredUserDTO).pipe(
      __map(_r => _r.body as RegisteredUserDTO)
    );
  }

  /**
   * @param registeredUserId registeredUserId
   * @return OK
   */
  getRegisteredUserUsingGETResponse(registeredUserId: number): __Observable<__StrictHttpResponse<RegisteredUserDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/registeredUser/${registeredUserId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RegisteredUserDTO>;
      })
    );
  }
  /**
   * @param registeredUserId registeredUserId
   * @return OK
   */
  getRegisteredUserUsingGET(registeredUserId: number): __Observable<RegisteredUserDTO> {
    return this.getRegisteredUserUsingGETResponse(registeredUserId).pipe(
      __map(_r => _r.body as RegisteredUserDTO)
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
  getAllRegisteredUsersUsingGETResponse(params: AggregateResourceService.GetAllRegisteredUsersUsingGETParams): __Observable<__StrictHttpResponse<Array<RegisteredUserDTO>>> {
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
      this.rootUrl + `/api/registeredUsers`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<RegisteredUserDTO>>;
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
  getAllRegisteredUsersUsingGET(params: AggregateResourceService.GetAllRegisteredUsersUsingGETParams): __Observable<Array<RegisteredUserDTO>> {
    return this.getAllRegisteredUsersUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<RegisteredUserDTO>)
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
   * Parameters for findInompletedActivityByRegisteredUserIdUsingGET
   */
  export interface FindInompletedActivityByRegisteredUserIdUsingGETParams {

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

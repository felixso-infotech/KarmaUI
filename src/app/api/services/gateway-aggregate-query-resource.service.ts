/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ActivityAggregate } from '../models/activity-aggregate';
import { CommittedActivityAggregate } from '../models/committed-activity-aggregate';
import { DimensionDTO } from '../models/dimension-dto';
import { RegisteredUserAggregate } from '../models/registered-user-aggregate';

/**
 * Gateway Aggregate Query Resource
 */
@Injectable({
  providedIn: 'root',
})
class GatewayAggregateQueryResourceService extends __BaseService {
  static readonly getAllActivitiesUsingGETPath = '/api/query/activities';
  static readonly getAllCommittedActivitiesByStatusUsingGETPath = '/api/query/committed-activities/{status}';
  static readonly getAllDimensionsUsingGETPath = '/api/query/dimensions';
  static readonly getAllEnumProofTypesUsingGETPath = '/api/query/enums/proof-type';
  static readonly getAllEnumStatusUsingGETPath = '/api/query/enums/status';
  static readonly getAllEnumTypesUsingGETPath = '/api/query/enums/type';
  static readonly getRegisteredUserByUserIdUsingGETPath = '/api/query/registered-user/{userId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `GatewayAggregateQueryResourceService.GetAllActivitiesUsingGETParams` containing the following parameters:
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
  getAllActivitiesUsingGETResponse(params: GatewayAggregateQueryResourceService.GetAllActivitiesUsingGETParams): __Observable<__StrictHttpResponse<Array<ActivityAggregate>>> {
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
        return _r as __StrictHttpResponse<Array<ActivityAggregate>>;
      })
    );
  }
  /**
   * @param params The `GatewayAggregateQueryResourceService.GetAllActivitiesUsingGETParams` containing the following parameters:
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
  getAllActivitiesUsingGET(params: GatewayAggregateQueryResourceService.GetAllActivitiesUsingGETParams): __Observable<Array<ActivityAggregate>> {
    return this.getAllActivitiesUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<ActivityAggregate>)
    );
  }

  /**
   * @param params The `GatewayAggregateQueryResourceService.GetAllCommittedActivitiesByStatusUsingGETParams` containing the following parameters:
   *
   * - `status`: status
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
  getAllCommittedActivitiesByStatusUsingGETResponse(params: GatewayAggregateQueryResourceService.GetAllCommittedActivitiesByStatusUsingGETParams): __Observable<__StrictHttpResponse<Array<CommittedActivityAggregate>>> {
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
      this.rootUrl + `/api/query/committed-activities/${params.status}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CommittedActivityAggregate>>;
      })
    );
  }
  /**
   * @param params The `GatewayAggregateQueryResourceService.GetAllCommittedActivitiesByStatusUsingGETParams` containing the following parameters:
   *
   * - `status`: status
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
  getAllCommittedActivitiesByStatusUsingGET(params: GatewayAggregateQueryResourceService.GetAllCommittedActivitiesByStatusUsingGETParams): __Observable<Array<CommittedActivityAggregate>> {
    return this.getAllCommittedActivitiesByStatusUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<CommittedActivityAggregate>)
    );
  }

  /**
   * @param params The `GatewayAggregateQueryResourceService.GetAllDimensionsUsingGETParams` containing the following parameters:
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
  getAllDimensionsUsingGETResponse(params: GatewayAggregateQueryResourceService.GetAllDimensionsUsingGETParams): __Observable<__StrictHttpResponse<Array<DimensionDTO>>> {
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
      this.rootUrl + `/api/query/dimensions`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<DimensionDTO>>;
      })
    );
  }
  /**
   * @param params The `GatewayAggregateQueryResourceService.GetAllDimensionsUsingGETParams` containing the following parameters:
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
  getAllDimensionsUsingGET(params: GatewayAggregateQueryResourceService.GetAllDimensionsUsingGETParams): __Observable<Array<DimensionDTO>> {
    return this.getAllDimensionsUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<DimensionDTO>)
    );
  }

  /**
   * @param params The `GatewayAggregateQueryResourceService.GetAllEnumProofTypesUsingGETParams` containing the following parameters:
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
  getAllEnumProofTypesUsingGETResponse(params: GatewayAggregateQueryResourceService.GetAllEnumProofTypesUsingGETParams): __Observable<__StrictHttpResponse<Array<string>>> {
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
      this.rootUrl + `/api/query/enums/proof-type`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<string>>;
      })
    );
  }
  /**
   * @param params The `GatewayAggregateQueryResourceService.GetAllEnumProofTypesUsingGETParams` containing the following parameters:
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
  getAllEnumProofTypesUsingGET(params: GatewayAggregateQueryResourceService.GetAllEnumProofTypesUsingGETParams): __Observable<Array<string>> {
    return this.getAllEnumProofTypesUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<string>)
    );
  }

  /**
   * @param params The `GatewayAggregateQueryResourceService.GetAllEnumStatusUsingGETParams` containing the following parameters:
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
  getAllEnumStatusUsingGETResponse(params: GatewayAggregateQueryResourceService.GetAllEnumStatusUsingGETParams): __Observable<__StrictHttpResponse<Array<string>>> {
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
      this.rootUrl + `/api/query/enums/status`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<string>>;
      })
    );
  }
  /**
   * @param params The `GatewayAggregateQueryResourceService.GetAllEnumStatusUsingGETParams` containing the following parameters:
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
  getAllEnumStatusUsingGET(params: GatewayAggregateQueryResourceService.GetAllEnumStatusUsingGETParams): __Observable<Array<string>> {
    return this.getAllEnumStatusUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<string>)
    );
  }

  /**
   * @param params The `GatewayAggregateQueryResourceService.GetAllEnumTypesUsingGETParams` containing the following parameters:
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
  getAllEnumTypesUsingGETResponse(params: GatewayAggregateQueryResourceService.GetAllEnumTypesUsingGETParams): __Observable<__StrictHttpResponse<Array<string>>> {
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
      this.rootUrl + `/api/query/enums/type`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<string>>;
      })
    );
  }
  /**
   * @param params The `GatewayAggregateQueryResourceService.GetAllEnumTypesUsingGETParams` containing the following parameters:
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
  getAllEnumTypesUsingGET(params: GatewayAggregateQueryResourceService.GetAllEnumTypesUsingGETParams): __Observable<Array<string>> {
    return this.getAllEnumTypesUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<string>)
    );
  }

  /**
   * @param userId userId
   * @return OK
   */
  getRegisteredUserByUserIdUsingGETResponse(userId: string): __Observable<__StrictHttpResponse<RegisteredUserAggregate>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/registered-user/${userId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RegisteredUserAggregate>;
      })
    );
  }
  /**
   * @param userId userId
   * @return OK
   */
  getRegisteredUserByUserIdUsingGET(userId: string): __Observable<RegisteredUserAggregate> {
    return this.getRegisteredUserByUserIdUsingGETResponse(userId).pipe(
      __map(_r => _r.body as RegisteredUserAggregate)
    );
  }
}

module GatewayAggregateQueryResourceService {

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
   * Parameters for getAllCommittedActivitiesByStatusUsingGET
   */
  export interface GetAllCommittedActivitiesByStatusUsingGETParams {

    /**
     * status
     */
    status: string;
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
   * Parameters for getAllDimensionsUsingGET
   */
  export interface GetAllDimensionsUsingGETParams {
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
   * Parameters for getAllEnumProofTypesUsingGET
   */
  export interface GetAllEnumProofTypesUsingGETParams {
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
   * Parameters for getAllEnumStatusUsingGET
   */
  export interface GetAllEnumStatusUsingGETParams {
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
   * Parameters for getAllEnumTypesUsingGET
   */
  export interface GetAllEnumTypesUsingGETParams {
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

export { GatewayAggregateQueryResourceService }

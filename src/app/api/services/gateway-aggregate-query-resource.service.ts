/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CommittedActivityAggregate } from '../models/committed-activity-aggregate';

/**
 * Gateway Aggregate Query Resource
 */
@Injectable({
  providedIn: 'root',
})
class GatewayAggregateQueryResourceService extends __BaseService {
  static readonly getAllCommittedActivitiesByStatusUsingGETPath = '/api/query/committed-activities/{status}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
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
}

module GatewayAggregateQueryResourceService {

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
}

export { GatewayAggregateQueryResourceService }

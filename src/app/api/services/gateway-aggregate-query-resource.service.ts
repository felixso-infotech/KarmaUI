/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ActivityDTO } from '../models/activity-dto';
import { ChallengeDTO } from '../models/challenge-dto';
import { CommittedActivityAggregate } from '../models/committed-activity-aggregate';
import { DimensionDTO } from '../models/dimension-dto';
import { CommentAggregate } from '../models/comment-aggregate';
import { ReplyAggregate } from '../models/reply-aggregate';
import { RegisteredUserAggregate } from '../models/registered-user-aggregate';

/**
 * Gateway Aggregate Query Resource
 */
@Injectable({
  providedIn: 'root',
})
class GatewayAggregateQueryResourceService extends __BaseService {
  static readonly getAllActivitiesUsingGETPath = '/api/query/activities';
  static readonly getAllChallengesUsingGETPath = '/api/query/challenges';
  static readonly getAllCommittedActivitiesByStatusUsingGETPath = '/api/query/committed-activities/{status}';
  static readonly getAllDimensionsUsingGETPath = '/api/query/dimensions';
  static readonly getAllEnumProofTypesUsingGETPath = '/api/query/enums/proof-type';
  static readonly getAllEnumStatusUsingGETPath = '/api/query/enums/status';
  static readonly getAllEnumTypesUsingGETPath = '/api/query/enums/type';
  static readonly getAllCommentsByCommitedActivityIdUsingGETPath = '/api/query/get-comments/{commitedActivityId}';
  static readonly getAllRepliesByCommentIdUsingGETPath = '/api/query/get-replies/{commentId}';
  static readonly getRegisteredUserByUserIdUsingGETPath = '/api/query/registered-user/{userId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return OK
   */
  getAllActivitiesUsingGETResponse(): __Observable<__StrictHttpResponse<Array<ActivityDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
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
        return _r as __StrictHttpResponse<Array<ActivityDTO>>;
      })
    );
  }
  /**
   * @return OK
   */
  getAllActivitiesUsingGET(): __Observable<Array<ActivityDTO>> {
    return this.getAllActivitiesUsingGETResponse().pipe(
      __map(_r => _r.body as Array<ActivityDTO>)
    );
  }

  /**
   * @param params The `GatewayAggregateQueryResourceService.GetAllChallengesUsingGETParams` containing the following parameters:
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
  getAllChallengesUsingGETResponse(params: GatewayAggregateQueryResourceService.GetAllChallengesUsingGETParams): __Observable<__StrictHttpResponse<Array<ChallengeDTO>>> {
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
      this.rootUrl + `/api/query/challenges`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ChallengeDTO>>;
      })
    );
  }
  /**
   * @param params The `GatewayAggregateQueryResourceService.GetAllChallengesUsingGETParams` containing the following parameters:
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
  getAllChallengesUsingGET(params: GatewayAggregateQueryResourceService.GetAllChallengesUsingGETParams): __Observable<Array<ChallengeDTO>> {
    return this.getAllChallengesUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<ChallengeDTO>)
    );
  }

  /**
   * @param status status
   * @return OK
   */
  getAllCommittedActivitiesByStatusUsingGETResponse(status: string): __Observable<__StrictHttpResponse<Array<CommittedActivityAggregate>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/committed-activities/${status}`,
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
   * @param status status
   * @return OK
   */
  getAllCommittedActivitiesByStatusUsingGET(status: string): __Observable<Array<CommittedActivityAggregate>> {
    return this.getAllCommittedActivitiesByStatusUsingGETResponse(status).pipe(
      __map(_r => _r.body as Array<CommittedActivityAggregate>)
    );
  }

  /**
   * @return OK
   */
  getAllDimensionsUsingGETResponse(): __Observable<__StrictHttpResponse<Array<DimensionDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
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
   * @return OK
   */
  getAllDimensionsUsingGET(): __Observable<Array<DimensionDTO>> {
    return this.getAllDimensionsUsingGETResponse().pipe(
      __map(_r => _r.body as Array<DimensionDTO>)
    );
  }

  /**
   * @return OK
   */
  getAllEnumProofTypesUsingGETResponse(): __Observable<__StrictHttpResponse<Array<string>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
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
   * @return OK
   */
  getAllEnumProofTypesUsingGET(): __Observable<Array<string>> {
    return this.getAllEnumProofTypesUsingGETResponse().pipe(
      __map(_r => _r.body as Array<string>)
    );
  }

  /**
   * @return OK
   */
  getAllEnumStatusUsingGETResponse(): __Observable<__StrictHttpResponse<Array<string>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
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
   * @return OK
   */
  getAllEnumStatusUsingGET(): __Observable<Array<string>> {
    return this.getAllEnumStatusUsingGETResponse().pipe(
      __map(_r => _r.body as Array<string>)
    );
  }

  /**
   * @return OK
   */
  getAllEnumTypesUsingGETResponse(): __Observable<__StrictHttpResponse<Array<string>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
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
   * @return OK
   */
  getAllEnumTypesUsingGET(): __Observable<Array<string>> {
    return this.getAllEnumTypesUsingGETResponse().pipe(
      __map(_r => _r.body as Array<string>)
    );
  }

  /**
   * @param params The `GatewayAggregateQueryResourceService.GetAllCommentsByCommitedActivityIdUsingGETParams` containing the following parameters:
   *
   * - `commitedActivityId`: commitedActivityId
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
  getAllCommentsByCommitedActivityIdUsingGETResponse(params: GatewayAggregateQueryResourceService.GetAllCommentsByCommitedActivityIdUsingGETParams): __Observable<__StrictHttpResponse<Array<CommentAggregate>>> {
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
      this.rootUrl + `/api/query/get-comments/${params.commitedActivityId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CommentAggregate>>;
      })
    );
  }
  /**
   * @param params The `GatewayAggregateQueryResourceService.GetAllCommentsByCommitedActivityIdUsingGETParams` containing the following parameters:
   *
   * - `commitedActivityId`: commitedActivityId
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
  getAllCommentsByCommitedActivityIdUsingGET(params: GatewayAggregateQueryResourceService.GetAllCommentsByCommitedActivityIdUsingGETParams): __Observable<Array<CommentAggregate>> {
    return this.getAllCommentsByCommitedActivityIdUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<CommentAggregate>)
    );
  }

  /**
   * @param params The `GatewayAggregateQueryResourceService.GetAllRepliesByCommentIdUsingGETParams` containing the following parameters:
   *
   * - `commentId`: commentId
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
  getAllRepliesByCommentIdUsingGETResponse(params: GatewayAggregateQueryResourceService.GetAllRepliesByCommentIdUsingGETParams): __Observable<__StrictHttpResponse<Array<ReplyAggregate>>> {
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
      this.rootUrl + `/api/query/get-replies/${params.commentId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ReplyAggregate>>;
      })
    );
  }
  /**
   * @param params The `GatewayAggregateQueryResourceService.GetAllRepliesByCommentIdUsingGETParams` containing the following parameters:
   *
   * - `commentId`: commentId
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
  getAllRepliesByCommentIdUsingGET(params: GatewayAggregateQueryResourceService.GetAllRepliesByCommentIdUsingGETParams): __Observable<Array<ReplyAggregate>> {
    return this.getAllRepliesByCommentIdUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<ReplyAggregate>)
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
   * Parameters for getAllChallengesUsingGET
   */
  export interface GetAllChallengesUsingGETParams {
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
   * Parameters for getAllCommentsByCommitedActivityIdUsingGET
   */
  export interface GetAllCommentsByCommitedActivityIdUsingGETParams {

    /**
     * commitedActivityId
     */
    commitedActivityId: number;
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
   * Parameters for getAllRepliesByCommentIdUsingGET
   */
  export interface GetAllRepliesByCommentIdUsingGETParams {

    /**
     * commentId
     */
    commentId: number;
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

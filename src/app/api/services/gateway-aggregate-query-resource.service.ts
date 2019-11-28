/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ActivityViewAggregate } from '../models/activity-view-aggregate';
import { ChallengeDTO } from '../models/challenge-dto';
import { CommittedActivityAggregate } from '../models/committed-activity-aggregate';
import { CommittedActivityProfileAggregate } from '../models/committed-activity-profile-aggregate';
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
  static readonly getActivityByIdUsingGETPath = '/api/query/activity/{id}';
  static readonly getAllChallengesUsingGETPath = '/api/query/challenges';
  static readonly getAllCommittedActivitiesByStatusUsingGETPath = '/api/query/committed-activities/{status}';
  static readonly getAllCommittedActivitiesByStatusAndRegisteredUserIdUsingGETPath = '/api/query/committed-activities/{status}/{registeredUserId}';
  static readonly getCommittedActivityUsingGETPath = '/api/query/committed-activity/{id}';
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
  getAllActivitiesUsingGETResponse(params: GatewayAggregateQueryResourceService.GetAllActivitiesUsingGETParams): __Observable<__StrictHttpResponse<Array<ActivityViewAggregate>>> {
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
        return _r as __StrictHttpResponse<Array<ActivityViewAggregate>>;
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
  getAllActivitiesUsingGET(params: GatewayAggregateQueryResourceService.GetAllActivitiesUsingGETParams): __Observable<Array<ActivityViewAggregate>> {
    return this.getAllActivitiesUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<ActivityViewAggregate>)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  getActivityByIdUsingGETResponse(id: number): __Observable<__StrictHttpResponse<ActivityViewAggregate>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/activity/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ActivityViewAggregate>;
      })
    );
  }
  /**
   * @param id id
   * @return OK
   */
  getActivityByIdUsingGET(id: number): __Observable<ActivityViewAggregate> {
    return this.getActivityByIdUsingGETResponse(id).pipe(
      __map(_r => _r.body as ActivityViewAggregate)
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
   * @param params The `GatewayAggregateQueryResourceService.GetAllCommittedActivitiesByStatusAndRegisteredUserIdUsingGETParams` containing the following parameters:
   *
   * - `status`: status
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
  getAllCommittedActivitiesByStatusAndRegisteredUserIdUsingGETResponse(params: GatewayAggregateQueryResourceService.GetAllCommittedActivitiesByStatusAndRegisteredUserIdUsingGETParams): __Observable<__StrictHttpResponse<Array<CommittedActivityProfileAggregate>>> {
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
      this.rootUrl + `/api/query/committed-activities/${params.status}/${params.registeredUserId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CommittedActivityProfileAggregate>>;
      })
    );
  }
  /**
   * @param params The `GatewayAggregateQueryResourceService.GetAllCommittedActivitiesByStatusAndRegisteredUserIdUsingGETParams` containing the following parameters:
   *
   * - `status`: status
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
  getAllCommittedActivitiesByStatusAndRegisteredUserIdUsingGET(params: GatewayAggregateQueryResourceService.GetAllCommittedActivitiesByStatusAndRegisteredUserIdUsingGETParams): __Observable<Array<CommittedActivityProfileAggregate>> {
    return this.getAllCommittedActivitiesByStatusAndRegisteredUserIdUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<CommittedActivityProfileAggregate>)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  getCommittedActivityUsingGETResponse(id: number): __Observable<__StrictHttpResponse<CommittedActivityAggregate>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/committed-activity/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommittedActivityAggregate>;
      })
    );
  }
  /**
   * @param id id
   * @return OK
   */
  getCommittedActivityUsingGET(id: number): __Observable<CommittedActivityAggregate> {
    return this.getCommittedActivityUsingGETResponse(id).pipe(
      __map(_r => _r.body as CommittedActivityAggregate)
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
   * Parameters for getAllCommittedActivitiesByStatusAndRegisteredUserIdUsingGET
   */
  export interface GetAllCommittedActivitiesByStatusAndRegisteredUserIdUsingGETParams {

    /**
     * status
     */
    status: string;

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

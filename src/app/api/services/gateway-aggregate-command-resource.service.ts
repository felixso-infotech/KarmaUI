/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ActivityAggregate } from '../models/activity-aggregate';
import { CommittedActivityStatusAggregate } from '../models/committed-activity-status-aggregate';
import { RegisteredUserDTO } from '../models/registered-user-dto';
import { CommentDTO } from '../models/comment-dto';
import { LoveDTO } from '../models/love-dto';
import { ReplyDTO } from '../models/reply-dto';

/**
 * Gateway Aggregate Command Resource
 */
@Injectable({
  providedIn: 'root',
})
class GatewayAggregateCommandResourceService extends __BaseService {
  static readonly createActivityUsingPOSTPath = '/api/command/create-activity';
  static readonly createCommittedActivityUsingPOSTPath = '/api/command/create-committed-activity';
  static readonly createRegisteredUserUsingPOSTPath = '/api/command/create-registered-user';
  static readonly deleteRegisteredUserUsingDELETEPath = '/api/command/delete-registered-user/{id}';
  static readonly saveCommentUsingPOSTPath = '/api/command/save-comment';
  static readonly doLoveUsingPOSTPath = '/api/command/save-love';
  static readonly saveReplyUsingPOSTPath = '/api/command/save-reply';
  static readonly unloveCommentUsingDELETEPath = '/api/command/unlove-comment';
  static readonly unloveCommittedActivityUsingDELETEPath = '/api/command/unlove-committedactivity';
  static readonly unloveReplyUsingDELETEPath = '/api/command/unlove-reply';
  static readonly updateActivityUsingPUTPath = '/api/command/update-activity';
  static readonly updateCommittedActivityUsingPUTPath = '/api/command/update-committed-activity';
  static readonly updateRegisteredUserUsingPUTPath = '/api/command/update-registered-user';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param activityAggregate activityAggregate
   * @return OK
   */
  createActivityUsingPOSTResponse(activityAggregate: ActivityAggregate): __Observable<__StrictHttpResponse<ActivityAggregate>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = activityAggregate;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/command/create-activity`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ActivityAggregate>;
      })
    );
  }
  /**
   * @param activityAggregate activityAggregate
   * @return OK
   */
  createActivityUsingPOST(activityAggregate: ActivityAggregate): __Observable<ActivityAggregate> {
    return this.createActivityUsingPOSTResponse(activityAggregate).pipe(
      __map(_r => _r.body as ActivityAggregate)
    );
  }

  /**
   * @param committedActivityStatusAggregate committedActivityStatusAggregate
   * @return OK
   */
  createCommittedActivityUsingPOSTResponse(committedActivityStatusAggregate: CommittedActivityStatusAggregate): __Observable<__StrictHttpResponse<CommittedActivityStatusAggregate>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = committedActivityStatusAggregate;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/command/create-committed-activity`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommittedActivityStatusAggregate>;
      })
    );
  }
  /**
   * @param committedActivityStatusAggregate committedActivityStatusAggregate
   * @return OK
   */
  createCommittedActivityUsingPOST(committedActivityStatusAggregate: CommittedActivityStatusAggregate): __Observable<CommittedActivityStatusAggregate> {
    return this.createCommittedActivityUsingPOSTResponse(committedActivityStatusAggregate).pipe(
      __map(_r => _r.body as CommittedActivityStatusAggregate)
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
      this.rootUrl + `/api/command/create-registered-user`,
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
   * @param id id
   */
  deleteRegisteredUserUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/command/delete-registered-user/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id id
   */
  deleteRegisteredUserUsingDELETE(id: number): __Observable<null> {
    return this.deleteRegisteredUserUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param commentDTO commentDTO
   * @return OK
   */
  saveCommentUsingPOSTResponse(commentDTO: CommentDTO): __Observable<__StrictHttpResponse<CommentDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = commentDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/command/save-comment`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommentDTO>;
      })
    );
  }
  /**
   * @param commentDTO commentDTO
   * @return OK
   */
  saveCommentUsingPOST(commentDTO: CommentDTO): __Observable<CommentDTO> {
    return this.saveCommentUsingPOSTResponse(commentDTO).pipe(
      __map(_r => _r.body as CommentDTO)
    );
  }

  /**
   * @param loveDTO loveDTO
   * @return OK
   */
  doLoveUsingPOSTResponse(loveDTO: LoveDTO): __Observable<__StrictHttpResponse<LoveDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = loveDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/command/save-love`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LoveDTO>;
      })
    );
  }
  /**
   * @param loveDTO loveDTO
   * @return OK
   */
  doLoveUsingPOST(loveDTO: LoveDTO): __Observable<LoveDTO> {
    return this.doLoveUsingPOSTResponse(loveDTO).pipe(
      __map(_r => _r.body as LoveDTO)
    );
  }

  /**
   * @param replyDTO replyDTO
   * @return OK
   */
  saveReplyUsingPOSTResponse(replyDTO: ReplyDTO): __Observable<__StrictHttpResponse<ReplyDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = replyDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/command/save-reply`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ReplyDTO>;
      })
    );
  }
  /**
   * @param replyDTO replyDTO
   * @return OK
   */
  saveReplyUsingPOST(replyDTO: ReplyDTO): __Observable<ReplyDTO> {
    return this.saveReplyUsingPOSTResponse(replyDTO).pipe(
      __map(_r => _r.body as ReplyDTO)
    );
  }

  /**
   * @param loveDTO loveDTO
   */
  unloveCommentUsingDELETEResponse(loveDTO: LoveDTO): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = loveDTO;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/command/unlove-comment`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param loveDTO loveDTO
   */
  unloveCommentUsingDELETE(loveDTO: LoveDTO): __Observable<null> {
    return this.unloveCommentUsingDELETEResponse(loveDTO).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param loveDTO loveDTO
   */
  unloveCommittedActivityUsingDELETEResponse(loveDTO: LoveDTO): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = loveDTO;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/command/unlove-committedactivity`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param loveDTO loveDTO
   */
  unloveCommittedActivityUsingDELETE(loveDTO: LoveDTO): __Observable<null> {
    return this.unloveCommittedActivityUsingDELETEResponse(loveDTO).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param loveDTO loveDTO
   */
  unloveReplyUsingDELETEResponse(loveDTO: LoveDTO): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = loveDTO;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/command/unlove-reply`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param loveDTO loveDTO
   */
  unloveReplyUsingDELETE(loveDTO: LoveDTO): __Observable<null> {
    return this.unloveReplyUsingDELETEResponse(loveDTO).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param activityAggregate activityAggregate
   * @return OK
   */
  updateActivityUsingPUTResponse(activityAggregate: ActivityAggregate): __Observable<__StrictHttpResponse<ActivityAggregate>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = activityAggregate;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/command/update-activity`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ActivityAggregate>;
      })
    );
  }
  /**
   * @param activityAggregate activityAggregate
   * @return OK
   */
  updateActivityUsingPUT(activityAggregate: ActivityAggregate): __Observable<ActivityAggregate> {
    return this.updateActivityUsingPUTResponse(activityAggregate).pipe(
      __map(_r => _r.body as ActivityAggregate)
    );
  }

  /**
   * @param committedActivityStatusAggregate committedActivityStatusAggregate
   * @return OK
   */
  updateCommittedActivityUsingPUTResponse(committedActivityStatusAggregate: CommittedActivityStatusAggregate): __Observable<__StrictHttpResponse<CommittedActivityStatusAggregate>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = committedActivityStatusAggregate;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/command/update-committed-activity`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommittedActivityStatusAggregate>;
      })
    );
  }
  /**
   * @param committedActivityStatusAggregate committedActivityStatusAggregate
   * @return OK
   */
  updateCommittedActivityUsingPUT(committedActivityStatusAggregate: CommittedActivityStatusAggregate): __Observable<CommittedActivityStatusAggregate> {
    return this.updateCommittedActivityUsingPUTResponse(committedActivityStatusAggregate).pipe(
      __map(_r => _r.body as CommittedActivityStatusAggregate)
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
      this.rootUrl + `/api/command/update-registered-user`,
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
}

module GatewayAggregateCommandResourceService {
}

export { GatewayAggregateCommandResourceService }

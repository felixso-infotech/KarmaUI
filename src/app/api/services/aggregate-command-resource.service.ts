/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CompletedActivityModel } from '../models/completed-activity-model';
import { RegisteredUserModel } from '../models/registered-user-model';

/**
 * Aggregate Command Resource
 */
@Injectable({
  providedIn: 'root',
})
class AggregateCommandResourceService extends __BaseService {
  static readonly createCompletedActivityUsingPOSTPath = '/api/command/completed-activities';
  static readonly createRegisteredUserUsingPOSTPath = '/api/command/registered-users';
  static readonly updateRegisteredUserUsingPUTPath = '/api/command/registered-users';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param completedActivityModel completedActivityModel
   * @return OK
   */
  createCompletedActivityUsingPOSTResponse(completedActivityModel: CompletedActivityModel): __Observable<__StrictHttpResponse<CompletedActivityModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = completedActivityModel;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/command/completed-activities`,
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
      this.rootUrl + `/api/command/registered-users`,
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
      this.rootUrl + `/api/command/registered-users`,
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
}

module AggregateCommandResourceService {
}

export { AggregateCommandResourceService }

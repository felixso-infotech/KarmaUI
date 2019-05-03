import { MOCK_ACTIVITIES } from './mock-activities';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': '*'
  })};

@Injectable({
  providedIn: 'root'
})
export class KarmaXapiService {

  XAPI_SERVER_URL="http://192.168.43.69:8086/api/content-records?callback=foo";

  constructor(private http:HttpClient) { 

  }

  getMockActivities() {
    return MOCK_ACTIVITIES;
  }

  getActivities(){
      return this.http.get(this.XAPI_SERVER_URL,httpOptions);
  }
}

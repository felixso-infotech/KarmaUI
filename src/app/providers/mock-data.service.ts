import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  data: any;

  constructor(public http: HttpClient) { }

  getCompletedActivities() {
    return this.http.get('assets/data/karma-mock.json').
      pipe(map((data:any)=>{
        this.data=data.committedActivities;
        return this.data;
      },this))
  }

}

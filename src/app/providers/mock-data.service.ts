import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CommittedActivity } from '../interfaces/committed-activity';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  data: any;

  public currentCommittedActivity: CommittedActivity;

  constructor(public http: HttpClient) { }

  getCompletedActivities() {
    return this.http.get('assets/data/karma-mock.json').
      pipe(map((data: any) => {
        this.data = data.committedActivities;
        return this.data;
      }, this));
  }

  getCommentsByCommittedActivityId() {
    return this.http.get('assets/data/karma-mock.json').
      pipe(map((data: any) => {
        this.data = data.comments;
        this.data=this.data.filter(data => {
          data.committedActivitytId == this.currentCommittedActivity.id;
        });
        return this.data;
      }, this));
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CommittedActivity } from '../interfaces/committed-activity';
import { Comment } from '../interfaces/comment';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  data: any;
  updatedComments: Comment[];

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

    console.log('current committed activity',this.currentCommittedActivity);
    return this.http.get('assets/data/karma-mock.json').
      pipe(map((data: any) => {
        this.data= (data.comments.filter(comment => {return (comment.committedActivityId == this.currentCommittedActivity.id);}));
        this.data.forEach((element :Comment) => {
          element.postedUser=data.users[Math.floor(Math.random() * 10)];
        });
        return this.data;
      }, this));
  }
}

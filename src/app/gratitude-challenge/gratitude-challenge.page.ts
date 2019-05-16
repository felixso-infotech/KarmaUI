import { CompletedActivityModel } from './../api/models/completed-activity-model';
import { ActivityService } from './../activity.service';
import { ActivityModel } from './../api/models/activity-model';
import { Component, OnInit } from '@angular/core';
import { AggregateQueryResourceService } from '../api/services';
import { InstructionVideoModel } from '../api/models';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gratitude-challenge',
  templateUrl: './gratitude-challenge.page.html',
  styleUrls: ['./gratitude-challenge.page.scss'],
})
export class GratitudeChallengePage implements OnInit {

  isVideoPlayed = true;
 video: InstructionVideoModel;
 id: any;
  activityService: ActivityService;
  constructor(private aggregate: AggregateQueryResourceService, private route: ActivatedRoute) { }

  ngOnInit() {
     console.log('ngOninit');
     this.getUrlId();
/*      this.aggregate.getInstructionVideoByActivityIdUsingGET(this.id).subscribe(response => {
     this.video = response;
      console.log(response);
    }, error => {
      console.log(error);
    }); */

  }

  getUrlId(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    }
 

  afterVideoPlayed() {
    this.isVideoPlayed = true;
  }
}

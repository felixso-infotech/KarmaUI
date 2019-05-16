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
  constructor(private aggregateResource: AggregateQueryResourceService, private activatedRoute: ActivatedRoute, private activityService: ActivityService) { }

  ngOnInit() {
     console.log('ngOninit');
      this.aggregateResource.getInstructionVideoByActivityIdUsingGET(this.getActivityId()).subscribe(response => {
/*      this.video = response; */
        this.activityService.currentActivity=response;
      console.log(response);
    }, error => {
      console.log(error);
    });

  }

  getActivityId(): number {
    return +this.activatedRoute.snapshot.paramMap.get('id');
    }
 

  afterVideoPlayed() {
    this.isVideoPlayed = true;
  }
}

import { Component, OnInit } from '@angular/core';
import { AggregateQueryResourceService } from '../api/services';
import { InstructionVideoModel } from '../api/models';

@Component({
  selector: 'app-gratitude-challenge',
  templateUrl: './gratitude-challenge.page.html',
  styleUrls: ['./gratitude-challenge.page.scss'],
})
export class GratitudeChallengePage implements OnInit {

  isVideoPlayed = false;
 video: InstructionVideoModel;
  constructor(private aggregate: AggregateQueryResourceService) { }

  ngOnInit() {
     console.log('ngOninit');
     this.aggregate.getInstructionVideoByActivityIdUsingGET(1).subscribe(response=>{
      this.video = response;
      console.log(response);
    }, error => {
      console.log(error);
    });
  }
  afterVideoPlayed() {
    this.isVideoPlayed = true;
  }
}

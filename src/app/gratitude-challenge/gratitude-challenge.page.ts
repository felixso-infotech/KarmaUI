import { Component, OnInit } from '@angular/core';
import { AggregateQueryResourceService } from '../api/services';
import { InstructionVideoModel } from '../api/models';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-gratitude-challenge',
  templateUrl: './gratitude-challenge.page.html',
  styleUrls: ['./gratitude-challenge.page.scss'],
})
export class GratitudeChallengePage implements OnInit {

  isVideoPlayed = true;
 video: InstructionVideoModel;
 id: any;
 sub:any;
  constructor(private aggregate: AggregateQueryResourceService,private route: ActivatedRoute) { }

  ngOnInit() {
     console.log('ngOninit');
     this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; 
      console.log("id",this.id);
    });

     this.aggregate.getInstructionVideoByActivityIdUsingGET(this.id).subscribe(response=>{
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

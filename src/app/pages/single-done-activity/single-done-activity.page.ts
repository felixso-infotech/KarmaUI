import { Component, OnInit } from '@angular/core';
import { GatewayAggregateQueryResourceService } from '../../api/services';
import { CommittedActivityAggregate } from '../../api/models';

@Component({
  selector: 'single-done-activity',
  templateUrl: './single-done-activity.page.html',
  styleUrls: ['./single-done-activity.page.scss'],
})
export class SingleDoneActivityPage implements OnInit {

  committedActivityAggregate:CommittedActivityAggregate;
  constructor(public gatewayAggregateQueryResourceService:GatewayAggregateQueryResourceService) { }

  ngOnInit() {
  }

  goToDeatailForView(index:number){
    this.gatewayAggregateQueryResourceService.getCommittedActivityUsingGET(index).subscribe((result)=>{this.committedActivityAggregate=result},(error)=>{console.log("Error ",error)});
  }

}

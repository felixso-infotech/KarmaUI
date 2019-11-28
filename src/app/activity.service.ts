import { Injectable } from '@angular/core';
import { ActivityViewAggregate, CommittedActivityAggregate } from './api/models';
import { GatewayAggregateQueryResourceService } from './api/services';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  public currentActivity: ActivityViewAggregate=null;
  public currentCommittedActivity:CommittedActivityAggregate=null;

  constructor(public aggregatetQueryService: GatewayAggregateQueryResourceService) { }

  public selectActivity(activityId: number) : void {
    this.aggregatetQueryService.getActivityByIdUsingGET(activityId).subscribe(response=>{
      this.currentActivity=response;
      console.log(response);
    })
  }

  public selectCommittedACtivity(committedActivityId:number):void{
    console.log("*********selectCommittedACtivity");
    this.aggregatetQueryService.getCommittedActivityUsingGET(committedActivityId).subscribe((response)=>
    {this.currentCommittedActivity=response;
    console.log("res ",response);
    console.log("res after ",this.currentCommittedActivity)})
  }

}

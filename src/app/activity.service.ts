import { Injectable } from '@angular/core';
import { ActivityViewAggregate, CommittedActivityAggregate, CommittedActivityProfileAggregate } from './api/models';
import { GatewayAggregateQueryResourceService } from './api/services';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  public currentActivity: ActivityViewAggregate=null;
  public currentCommittedProfileAggregate:CommittedActivityProfileAggregate=null;

  constructor(public aggregatetQueryService: GatewayAggregateQueryResourceService) { }

  public selectActivity(activityId: number) : void {
    this.aggregatetQueryService.getActivityByIdUsingGET(activityId).subscribe(response=>{
      this.currentActivity=response;
      console.log(response);
    })
    console.log("Current Activity here",this.currentActivity);
  }

  public selectCurrentCommittedProfileAggregate(currentCommittedProfileAggregate:CommittedActivityProfileAggregate):void{
    this.currentCommittedProfileAggregate=currentCommittedProfileAggregate;
  }

}

import { Injectable } from '@angular/core';
import { ActivityViewAggregate } from './api/models';
import { GatewayAggregateQueryResourceService } from './api/services';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  public currentActivity: ActivityViewAggregate=null;

  constructor(public aggregatetQueryService: GatewayAggregateQueryResourceService) { }

  public selectActivity(activityId: number) : void {
    this.aggregatetQueryService.getActivityByIdUsingGET(activityId).subscribe(response=>{
      this.currentActivity=response;
      console.log(response);
    })
  }

}

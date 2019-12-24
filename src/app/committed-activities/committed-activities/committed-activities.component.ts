import { Component, OnInit } from '@angular/core';
import { CommittedActivityAggregate, CommittedActivityProfileAggregate } from '../../api/models';
import { GatewayAggregateQueryResourceService } from '../../api/services';
import { UserService } from '../../providers/user/user.service';
import { ActivityService } from '../../activity.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'committed-activities',
  templateUrl: './committed-activities.component.html',
  styleUrls: ['./committed-activities.component.scss'],
})
export class CommittedActivitiesComponent implements OnInit {

  committedActivityProfileAggregates: CommittedActivityProfileAggregate[]=[];
  backgroundImageUrls: String[]=[];
  status:string;
  committedActivityAggregateTemp:CommittedActivityAggregate[][];




  constructor(public gatewayAggregateQueryResourceService:GatewayAggregateQueryResourceService,public userService:UserService,public activityService:ActivityService,public navController:NavController) { }

  ngOnInit() {
    console.log("committed Activity page initialized");
    this.gatewayAggregateQueryResourceService.getAllCommittedActivitiesByStatusAndRegisteredUserIdUsingGET({
      status: "DONE",
      registeredUserId: this.userService.getRegisteredUser().id,
      unpaged: true,
      sortUnsorted: false,
      sortSorted: true
    }).subscribe((result)=>{
      this.committedActivityProfileAggregates=result;
        this.createActivityBackgroundImageUrls(result);
        console.log("-------",result);
        console.log(" Array size:::::",this.committedActivityProfileAggregates.length)
        console.log("@@@@@@",this.backgroundImageUrls); 
      });
  
   }

   segmentChanged(event: any) {
    console.log("*****Event value*****",event.detail.value);
    this.status=event.detail.value;
    this.viewSegmentChange();

  }

  //To take data on order to changed status 
  viewSegmentChange(){
    console.log("Segment Changed.........")
    this.gatewayAggregateQueryResourceService.getAllCommittedActivitiesByStatusAndRegisteredUserIdUsingGET({
      status: this.status,
      registeredUserId: this.userService.getRegisteredUser().id,
      unpaged: true,
      sortUnsorted: false,
      sortSorted: true
    }).subscribe((result)=>{this.committedActivityProfileAggregates=result;
      this.createActivityBackgroundImageUrls(result);
      console.log("-------",result);
      console.log(" Array size:::::",this.committedActivityProfileAggregates.length);});

  }
  
  
  //The following method converts a base64 encoded string to blob and returns a blob url
  getBlobUrl(base64String: String, contentType: String) {
    const sliceSize=512;
    const byteCharacters= atob(base64String+'');
    const byteArrays=[];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
  
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
  
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
      
    const blob = new Blob(byteArrays, {type: contentType+''});
    console.log("blob url", URL.createObjectURL(blob));
    return URL.createObjectURL(blob);

  }

  createActivityBackgroundImageUrls(committedActivities: CommittedActivityProfileAggregate[]) {
    committedActivities.forEach(data=>{
      this.backgroundImageUrls.push(this.getBlobUrl(data.activityImageString,data.activityImageContentType));
    })
  }

  goToDetail(index:number){
    console.log("&&&&&&&&&&&&&&&& Iam hereeee");
    this.activityService.selectCurrentCommittedProfileAggregate(this.committedActivityProfileAggregates[index]);
    
    if(this.committedActivityProfileAggregates[index].status=='TODO'){
      this.activityService.selectActivity(this.committedActivityProfileAggregates[index].activityId);
      this.navController.navigateRoot('app/tabs/karma/activity');
    }
    else if(this.committedActivityProfileAggregates[index].status=='INPROGRESS'){
      this.activityService.selectActivity(this.committedActivityProfileAggregates[index].activityId);
      this.navController.navigateRoot('app/tabs/karma/finish-activity');
    }
    else{}
  }

  goToDeatailForView(index:number){
    console.log("*****I am in detail view");
    this.activityService.selectCurrentCommittedProfileAggregate(this.committedActivityProfileAggregates[index]);
    this.navController.navigateRoot('app/tabs/profile/single-done-activity');
  }

}

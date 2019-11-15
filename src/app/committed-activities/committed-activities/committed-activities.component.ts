import { Component, OnInit } from '@angular/core';
import { CommittedActivityAggregate } from '../../api/models';
import { GatewayAggregateQueryResourceService } from '../../api/services';

@Component({
  selector: 'committed-activities',
  templateUrl: './committed-activities.component.html',
  styleUrls: ['./committed-activities.component.scss'],
})
export class CommittedActivitiesComponent implements OnInit {

  committedActivityAggregates: CommittedActivityAggregate[]=[];
  backgroundImageUrls: String[]=[];
  status:string;
  committedActivityAggregateTemp:CommittedActivityAggregate[][];



  constructor(public gatewayAggregateQueryResourceService:GatewayAggregateQueryResourceService) { }

  ngOnInit() {
    console.log("committed Activity page initialized");
    this.gatewayAggregateQueryResourceService.getAllCommittedActivitiesByStatusAndRegisteredUserIdUsingGET({
      status: "DONE",
      registeredUserId: 3,
      unpaged: true,
      sortUnsorted: false,
      sortSorted: true
    }).subscribe((result)=>{
      this.committedActivityAggregates=result;
        this.createActivityBackgroundImageUrls(result);
        console.log("-------",result);
        console.log(" Array size:::::",this.committedActivityAggregates.length)
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
      registeredUserId: 3,
      unpaged: true,
      sortUnsorted: false,
      sortSorted: true
    }).subscribe((result)=>{this.committedActivityAggregates=result;
      this.createActivityBackgroundImageUrls(result);
      console.log("-------",result);
      console.log(" Array size:::::",this.committedActivityAggregates.length);});

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

  createActivityBackgroundImageUrls(committedActivities: CommittedActivityAggregate[]) {
    committedActivities.forEach(data=>{
      this.backgroundImageUrls.push(this.getBlobUrl(data.imageString,data.imageStringContentType));
    })
  }

}

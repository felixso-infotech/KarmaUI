import { Injectable } from '@angular/core';
import { GatewayAggregateQueryResourceService } from '../api/services';
import { CommittedActivityAggregate } from '../api/models';

@Injectable({
  providedIn: 'root'
})
export class CompletedActivitiesService {

  public committedActivityAggregate: CommittedActivityAggregate[]=[];
  
  public backgroundImageUrls: String[]=[];

  public isSplashShowing=true;
  
  constructor(public gatewayAggregateQueryResource: GatewayAggregateQueryResourceService) { }

 /*  setCompletedActivities(){

    console.log("method starts");
    this.gatewayAggregateQueryResource.getAllCommittedActivitiesByStatusUsingGET("DONE").subscribe((result) => {
      this.committedActivityAggregate = result;
        this.createActivityBackgroundImageUrls(result);
        console.log("-------", result);
        console.log("*********13", this.committedActivityAggregate[1].imageStringContentType);
      });
  } */
    //The following method converts a base64 encoded string to blob and returns a blob url
    getBlobUrl(base64String: String, contentType: String) {
      const sliceSize = 512;
      const byteCharacters = atob(base64String + '');
      const byteArrays = [];
      for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);
  
        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
        }
  
        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
      }
  
      const blob = new Blob(byteArrays, { type: contentType + '' });
      console.log("blob url", URL.createObjectURL(blob));
      return URL.createObjectURL(blob);
  
    }
  
    createActivityBackgroundImageUrls(committedActivities: CommittedActivityAggregate[]) {
      committedActivities.forEach(data => {
        this.backgroundImageUrls.push(this.getBlobUrl(data.imageString, data.imageStringContentType));
      })
    }
}

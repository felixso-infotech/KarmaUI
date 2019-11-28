import { Component, OnInit } from '@angular/core';
import { GatewayAggregateQueryResourceService } from '../../api/services';
import { RegisteredUserAggregate } from '../../api/models';
import { UserService } from '../../providers/user/user.service';

@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {

  registeredUserAggregate:RegisteredUserAggregate={};

  backgroundImageUrl:string;

  constructor(public gatewayAggregateQueryResourceService:GatewayAggregateQueryResourceService,public userService:UserService) { }

  ngOnInit() {
    this.gatewayAggregateQueryResourceService.getRegisteredUserByUserIdUsingGET(this.userService.getRegisteredUser().userId).subscribe(
      (result)=>{
        this.registeredUserAggregate=result;
        this.createActivityBackgroundImageUrls(result);
        console.log("***Fetched Registered User***",result);
      }
    );
  }

  createActivityBackgroundImageUrls(registeredUserAggregate: RegisteredUserAggregate) {
      this.backgroundImageUrl=this.getBlobUrl(registeredUserAggregate.coverPhoto,registeredUserAggregate.coverPhotoContentType);
  }

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
}

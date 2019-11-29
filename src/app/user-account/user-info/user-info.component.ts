import { Component, OnInit } from '@angular/core';
import { GatewayAggregateQueryResourceService, GatewayAggregateCommandResourceService } from '../../api/services';
import { RegisteredUserAggregate } from '../../api/models';
import { UserService } from '../../providers/user/user.service';
import { CameraOptions, Camera} from '@ionic-native/camera/ngx';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {

  cameraOptions: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    sourceType: this.camera.PictureSourceType.CAMERA
  }

  registeredUserAggregate:RegisteredUserAggregate={};

  backgroundImageUrl:string;

  constructor(private camera:Camera, public gatewayAggregateQueryResourceService:GatewayAggregateQueryResourceService,public userService:UserService, public authService:AuthService,
    public gatewayAggregateCommandResourceService: GatewayAggregateCommandResourceService) { }

  ngOnInit() {
    console.log("profile page user details");
    console.log("user, registered user",this.userService.getUser(),this.userService.getRegisteredUser());
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

  selectPic() {
    console.log('ready to take the picture');
    this.camera.getPicture(this.cameraOptions).then(data=>{
      console.log('new profile pic',data);
      let user=this.userService.getRegisteredUser();
      let userCopy=user;
      user.profilePicture=data;
      user.profilePictureContentType='image/jpeg';
      
      this.userService.setRegisteredUser(user);
      console.log('new user is',this.userService.getRegisteredUser());
      this.gatewayAggregateCommandResourceService.updateRegisteredUserUsingPUT(this.userService.getRegisteredUser())
        .subscribe(data=>{
          console.log("registered user's profile pic has been updated",data);
        }, error=>{
          console.log('something went wrong when updating profile pic');
          this.userService.setRegisteredUser(userCopy);
        })
    },error=>{
      console.log('error while taking image',error);
    })
  }

  logoutTemp(){
    console.log('logout');
    
    this.authService.signOut();
  }
}

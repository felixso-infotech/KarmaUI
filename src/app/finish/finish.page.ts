import { LoginService } from './../security/login.service';
import { LoginPage } from './../login/login.page';
import { ActivityService } from './../activity.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { AggregateCommandResourceService } from '../api/services';
import { saveConfig } from '@ionic/core';
import { CompletedActivityModel } from '../api/models';
import { fileURLToPath } from 'url';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.page.html',
  styleUrls: ['./finish.page.scss']
})
export class FinishPage implements OnInit {

  public imagePath: string;
  imgURL: any;
  public message: string;
  public image: string;
  imageResponse: any;
  completedActivity: CompletedActivityModel = {
    proofs: []
  };


  // tslint:disable-next-line: max-line-length
  constructor(private activityService: ActivityService,
    private router: Router,
    public toastController: ToastController,
    private camera: Camera,
    private socialSharing: SocialSharing,
    private service: AggregateCommandResourceService, private imagePicker: ImagePicker,
    private base64: Base64,
    private loginService: LoginService,
    private sanitizer:DomSanitizer) { }

  ngOnInit() {
  }

  sendStatements() {
    console.log('finish  user:' + this.loginService.user);
    console.log('finish  user:' + this.activityService.currentActivity);

    this.router.navigate(['success']);
  }

  openCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    console.log('in method open camera, {}', options);
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      console.log("camera: imageData", imageData);
      this.imgURL = "data:image/jpg;base64," + imageData;
      this.image = this.imgURL;
      //this.save();
      // console.log(this.imgURL);
    }, (err) => {
      console.log(err);
    });

  }
  openGallery() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    }
    console.log('in method open gallery, {}', options);
    this.imageResponse = [];
    this.imagePicker.getPictures(options).then((imageData) => {
      // this.imgURL = imageData;
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      console.log("open gallery: image data", imageData);
      console.log("image data: length", imageData.length);

      console.log("****imageData**", imageData[0]);
      this.imagePath = imageData[0];
      this.base64.encodeFile(this.imagePath).then((base64File: string) => {
        // console.log(base64File);
        console.log("type", base64File.split(",")[1]);
        this.image = base64File.split(",")[1];
        
        this.imgURL = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,'+this.image);
        console.log("sanitized imageURL",this.imgURL);
        console.log("****image**", this.image);
      });
      //this.save();
    }, (err) => {
      console.log(err);
    });
  }


  save() {
    console.log("In save: this.save", this.image);
    if (this.image != null) {

      this.completedActivity.proofs.push({
        completedActivityId: this.activityService.currentActivity.id,
        file: this.image
        //fileContentType: this.,
        //fileName: this.imgURL.data.fileName,
        //  fileName: 'proof'+ this.activityService.currentActivity.title+this.activityService.currentUser.email,
      });
      this.completedActivity.activityTitle = this.activityService.currentActivity.title;
      this.completedActivity.activityId = this.activityService.currentActivity.id;
      this.completedActivity.registeredUserId = this.loginService.user.registeredUserId;

      this.service.createCompletedActivityUsingPOST(this.completedActivity)
        .subscribe(result => {
          this.completedActivity = result;
          console.log("completed activity saved ", result);
          console.log("completed activity user id ", result.registeredUserId);
          this.activityService.loadActivities();

        }, err => {
          console.log('Error creating completedActivity',err);
        });
    }
  }

  share() {
    // tslint:disable-next-line: max-line-length
    this.socialSharing.share(this.activityService.currentActivity.successMessage, null, this.imgURL, null).then(() => { console.log('shared') })
      .catch(err => { console.log(err); });
  }
}

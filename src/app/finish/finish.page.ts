import { LoginPage } from './../login/login.page';
import { ActivityService } from './../activity.service';
import { KarmaLrsService } from './../karma-lrs.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { AggregateCommandResourceService } from '../api/services';
import { saveConfig } from '@ionic/core';
import { CompletedActivityModel } from '../api/models';
import { fileURLToPath } from 'url';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.page.html',
  styleUrls: ['./finish.page.scss']
})
export class FinishPage implements OnInit {

  public imagePath;
  imgURL: any;
  public message: string;
  public image: string;
  completedActivity: CompletedActivityModel = {
    proofs: []
  };


// tslint:disable-next-line: max-line-length
  constructor(private lrsService: KarmaLrsService, private activityService: ActivityService, private router: Router, public toastController: ToastController, private camera: Camera, private socialSharing: SocialSharing, private service: AggregateCommandResourceService){ }

  ngOnInit() {
    console.log("current user id in home*******", this.activityService.currentUser.id);
  }

  sendStatements() {
    console.log('finish  user:' + this.activityService.currentUser);
    console.log('finish  user:' + this.activityService.currentActivity);

    this.lrsService.postStatement(this.activityService.currentUser, this.activityService.currentActivity);
    this.router.navigate(['success']);
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
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
      this.imgURL = imageData;
      this.image=this.imgURL;
      this.save();
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
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }
    console.log('in method open gallery, {}', options);
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.imgURL = imageData;
      this.image=this.imgURL;
      console.log("****imgurll filename",this.imgURL.fileName);
      
      console.log("****imgurll content type",this.imgURL.fileContentType);     
      this.save();
    //  console.log(this.imgURL);
    }, (err) => {
      console.log(err);
    });
  }

  save() {  
    if (this.image != null) {
      fetch(this.image).then(data => {
          this.completedActivity.proofs.push({
            completedActivityId: this.activityService.currentActivity.id,
              file: this.image,
             //fileContentType: this.,
            //fileName: this.imgURL.data.fileName,
          //  fileName: 'proof'+ this.activityService.currentActivity.title+this.activityService.currentUser.email,
          })
        this.completedActivity.activityTitle=this.activityService.currentActivity.title;
        this.completedActivity.activityId=this.activityService.currentActivity.id;
        this.completedActivity.registeredUserId=this.activityService.currentUser.id;

      this.service.createCompletedActivityUsingPOST(this.completedActivity)
      .subscribe(result => {
        this.completedActivity = result;
       console.log("completed activity saved ", result);  
       console.log("completed activity user id ", result.registeredUserId);  
       
      }, err => {
        console.log('Error creating completedActivity');
      });
    }
      )}
  }
  
  share() {
// tslint:disable-next-line: max-line-length
    this.socialSharing.share(this.activityService.currentActivity.successMessage, null, this.imgURL, null).then(() => { console.log('shared')})
      .catch(err => { console.log(err); });
  }
}

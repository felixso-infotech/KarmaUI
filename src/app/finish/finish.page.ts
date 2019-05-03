import { ActivityService } from './../activity.service';
import { KarmaLrsService } from './../karma-lrs.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';


@Component({
  selector: 'app-finish',
  templateUrl: './finish.page.html',
  styleUrls: ['./finish.page.scss'],
})
export class FinishPage implements OnInit {

  public imagePath;
  imgURL: any;
  public message: string;

  constructor(private lrsService: KarmaLrsService, private activityService: ActivityService, private router: Router, public toastController: ToastController, private camera: Camera, private socialSharing: SocialSharing) { }

  ngOnInit() {
  }

  preview(files) {
    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }

  sendStatements() {
    console.log("finish  user:" + this.activityService.currentUser);
    console.log("finish  user:" + this.activityService.currentActivity);

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

    console.log("in method open camera, {}", options);
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.imgURL = 'data:image/jpeg;base64,' + imageData;
      console.log(this.imgURL);
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
    console.log("in method open gallery, {}", options);
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.imgURL = 'data:image/jpeg;base64,' + imageData;
      console.log(this.imgURL);
    }, (err) => {
      console.log(err);
    });
  }
  share() {
    this.socialSharing.share("Congratulations! You have earned 500 coins. You have sucessfully completed the task of spending time with your teacher. Hope you have increased your gratitude level. Complete the remaining activities of the spin to get a medal...shared via karma", null, this.imgURL, null).then(() => { console.log("shared") })
      .catch(err => { console.log(err); });
  }
}

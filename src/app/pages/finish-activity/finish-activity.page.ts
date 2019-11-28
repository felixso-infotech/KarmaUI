import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { SafeHtmlPipe } from '../../pipes/safe-html.pipe';
import { ImageService } from '../../providers/image.service';
import { NavController, AlertController } from '@ionic/angular';
import { ActivityService } from '../../activity.service';

@Component({
  selector: 'finish-activity',
  templateUrl: './finish-activity.page.html',
  styleUrls: ['./finish-activity.page.scss'],
})
export class FinishActivityPage implements OnInit {

  base64Image:any;

  cameraOptions: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    sourceType: this.camera.PictureSourceType.CAMERA
  }

  photoOptions: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM
  }

  constructor(private camera: Camera, public imageService: ImageService, private navController: NavController, private alertController:AlertController, private activityService:ActivityService) { }

  ngOnInit() {
  }


  takePicture() {
    this.camera.getPicture(this.cameraOptions).then(data=>{
      console.log('taking picture',data);
      this.base64Image=this.imageService.getSanitazedUrl('image/jpeg',data);
    }).catch(err=>{
      console.log('error while taking image',err);
    })
  }
  selectImageFromGallery() {
    this.camera.getPicture(this.photoOptions).then(data=>{
      console.log('getting image from gallery',data);
      this.base64Image=this.imageService.getSanitazedUrl('image/jpeg',data);
    }).catch(err=>{
      console.log('error when getting image from gallery',err);
    });
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Do you want to finish your task?',
      message: 'Press no to upload the files later',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('user pressed no');
            this.navController.navigateRoot('app/tabs/karma');
          }
        }, {
          text: 'Yes',
          handler: () => {
            console.log('pressed Yes');
            this.showCongradulations();
          }
        }
      ]
    });

    await alert.present();
  }
  finishActivity() {
    console.log('activity is now ready to finish');
    this.navController.navigateRoot('app/tabs/karma');
  }
  async showCongradulations() {
    const alert = await this.alertController.create({
      header: 'Congradulations',
      message: 'Keep it up..great activities are waiting for you. Good journey...',
      cssClass: 'congradulations',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Thank you',
          handler: () => {
            console.log('pressed Yes');
            this.finishActivity();
          }
        }
      ]
    });

    await alert.present();
  }
}
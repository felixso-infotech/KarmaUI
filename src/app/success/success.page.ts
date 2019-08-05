import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ActivityService } from './../activity.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-success',
  templateUrl: './success.page.html',
  styleUrls: ['./success.page.scss'],
})
export class SuccessPage implements AfterViewInit {
  public alert;
  message;
  
  constructor(public alertController: AlertController, public activityService: ActivityService, private socialSharing: SocialSharing){}

  async ngAfterViewInit() {
    this.message=this.activityService.currentActivity.successMessage;
    this.alert = await this.alertController.create({
      message: this.activityService.currentActivity.successMessage,
      buttons: [{
        text: 'OK',
        cssClass: 'alertButton'
      }],
      cssClass: 'alert'
    });
    this.alert.present();
  }

  share() {
    // tslint:disable-next-line: max-line-length
    this.socialSharing.share(this.activityService.currentActivity.successMessage, null, null).then(() => { console.log('shared') })
      .catch(err => { console.log(err); });
  }
}


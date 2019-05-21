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
  
  constructor(public alertController: AlertController, public activityService: ActivityService){}

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

}


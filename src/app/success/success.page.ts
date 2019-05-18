import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-success',
  templateUrl: './success.page.html',
  styleUrls: ['./success.page.scss'],
})
export class SuccessPage implements AfterViewInit {
  public alert;

  constructor(public alertController: AlertController){}

  async ngAfterViewInit() {
    this.alert = await this.alertController.create({
      message: '<h1>Congradulation</h1><p>May God Bless You Both</p>',
      buttons: [{
        text: 'OK',
        cssClass: 'alertButton'
      }],
      cssClass: 'alert'
    });
    this.alert.present();
  }

}


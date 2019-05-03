import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private alertController: AlertController, private router:Router) { }

  ngOnInit() {
  }

  async presentAlert() {
    console.log("alert");
    const alert = await this.alertController.create({
      header: 'Warning',
      //subHeader: 'Are you want to log-out?',
      message: 'Are you want to log-out?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      },
      {
        text: 'Yes',
        role: 'okay',
        handler: ()=>{
          (<any>window).AccountKitPlugin.logout();
          this.router.navigate(['tabs/profile']);
        }
      }]
    });

    await alert.present();
  }
}

import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  username: string;
  email: string;
  userId: string;

  constructor(private alertController: AlertController, private router:Router,private oauthService: OAuthService) { }

  ngOnInit() {
    let claim;
    if ((claim = this.oauthService.getIdentityClaims()) != null) {
      console.log("user", claim);
      this.username = claim.preferred_username;
      this.userId = claim.sub;
      this.email = claim.email;
    }
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

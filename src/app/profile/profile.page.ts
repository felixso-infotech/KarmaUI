import { User } from './../user';
import { ActivityService } from './../activity.service';

import { AlertController, MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AggregateQueryResourceService } from '../api/services';
import { RegisteredUserModel } from '../api/models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
public user: RegisteredUserModel;
claims;
// tslint:disable-next-line: max-line-length
  constructor(private alertController: AlertController, private router: Router, private activityService: ActivityService, private oauthService: OAuthService, private aggregateQueryService: AggregateQueryResourceService) { }

  ngOnInit() {
// tslint:disable-next-line: label-position
    // this.loggedUser();
    this.oauthService.loadUserProfile().then((user: any) => {
      this.aggregateQueryService.getRegisteredUserByUserIdUsingGET(user.preferred_username).subscribe(res => {
      this.user = res;
      console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', this.user);
      }, err => {
        console.log('error occured while taking the user', err);
      })
      console.log(user);
    }).catch((err: HttpErrorResponse) => {
      //this.presentToast(err.error.error_description);
    });

  }


  async presentAlert() {
    console.log('alert');
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
         // (<any>window).AccountKitPlugin.logout();
        // this.menuCtrl.close();
        if (this.oauthService.hasValidAccessToken()){
        this.oauthService.logOut(false);
          this.router.navigate(['login']);
        }
      }
      }]
    });

    await alert.present();
  }
}

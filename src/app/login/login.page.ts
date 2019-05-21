import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';
import { ActivityService } from './../activity.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: User;
  constructor(private activityService:ActivityService,private navCtrl: NavController, private router: Router, private oauthService: OAuthService) { }

  ngOnInit() {
    this.user=this.activityService.currentUser;
    if (this.oauthService.hasValidAccessToken()) {
      this.navCtrl.navigateRoot('/tabs');
  }
}
  logForm() {
    console.log('in login' + this.user.username + ' password is ' + this.user.password);
    this.oauthService.fetchTokenUsingPasswordFlowAndLoadUserProfile(this.user.username, this.user.password, new HttpHeaders()).then(() => {
      const claims = this.oauthService.getIdentityClaims();
      if (claims) { console.log(claims);
      }
      if (this.oauthService.hasValidAccessToken()) {
        /* this.presentToast('Logged in successfully'); */
        this.navCtrl.navigateRoot('tabs/home');
      }
    }).catch((err: HttpErrorResponse) => {
      //this.presentToast(err.error.error_description);
    });
  }
  }

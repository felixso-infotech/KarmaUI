import { UsersPage } from './../users/users.page';
import { UserDTO } from './../api/models/user-dto';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';
import { ActivityService } from './../activity.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { AggregateCommandResourceService } from '../api/services';
import { RegisteredUserModel } from '../api/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: User;
  registeredUser: RegisteredUserModel={
  };

 
  constructor(private activityService: ActivityService,private navCtrl: NavController, private router: Router, private oauthService: OAuthService, private commandService:AggregateCommandResourceService) { }

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
        console.log("logged in successfullyyyy");
        this.registeredUser.userId=this.user.username; 
        this.commandService.createRegisteredUserUsingPOST(this.registeredUser);
        this.navCtrl.navigateRoot('tabs/home');
      }
    }).catch((err: HttpErrorResponse) => {
      console.log("no valid token");
      //this.presentToast(err.error.error_description);
    });
  }
  }
  

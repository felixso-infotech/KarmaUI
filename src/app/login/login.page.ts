import { UsersPage } from './../users/users.page';
import { UserDTO } from './../api/models/user-dto';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';
import { ActivityService } from './../activity.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { AggregateCommandResourceService, AggregateQueryResourceService } from '../api/services';
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

 
  constructor(private activityService: ActivityService,private navCtrl: NavController, private router: Router, private oauthService: OAuthService, private commandService:AggregateCommandResourceService,private queryService: AggregateQueryResourceService) { }

  ngOnInit() {
    this.user=this.activityService.currentUser;
    console.log(this.activityService.currentUser);
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

      if (this.oauthService.hasValidAccessToken()){
        console.log("logged in successfullyyyy");
        if(this.user.newUser===true){
          this.saveNewUser();
        }
      this.queryService.getRegisteredUserByUserIdUsingGET(this.user.username)
      .subscribe(result => {
       this.user.id=result.registeredUserId;
       this.navCtrl.navigateRoot('tabs/home');
      }, err => {
        console.log('fetched registeredUser');
      });

      console.log("*****logform user",this.activityService.currentUser);
      // this.navCtrl.navigateRoot('tabs/home');
      }
    }).catch((err: HttpErrorResponse) => {
      console.log("no valid token");
      //this.presentToast(err.error.error_description);
    });
  }

  saveNewUser(){
      this.registeredUser.userId=this.user.username;
      this.commandService.createRegisteredUserUsingPOST(this.registeredUser)
      .subscribe(result => {
      this.registeredUser = result;
    }, err => {
      console.log('Error creating registeredUser');
    });
  }
  }
  

import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthActions } from 'ionic-appauth';
import { skipWhile, take } from 'rxjs/operators';
import { AuthService } from '../../auth.service';

@Component({
  template: '<p style="margin-left: 10px">Authorizing...</p>'
})
export class AuthCallbackPage implements OnInit {
  constructor(private authService: AuthService, private navCtrl: NavController, private router: Router) {}

  ngOnInit() {
    console.log('begin');
    console.log('router url',this.router.url);
    this.authService.AuthorizationCallBack(this.router.url);
    this.authService.authObservable
      .pipe(
        skipWhile(action => action.action !== AuthActions.SignInSuccess && action.action !== AuthActions.SignInFailed),
        take(1)
      )
      .subscribe(action => {
        console.log(action);
        if (action.action === AuthActions.SignInSuccess) {
          this.navCtrl.navigateRoot('app');
        } else {
          this.navCtrl.navigateRoot('login-loading');
        }
      });
  }
}
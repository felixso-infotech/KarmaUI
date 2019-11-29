import { Component, OnInit } from '@angular/core';
import { AuthActions } from 'ionic-appauth';
import { AuthService } from '../../auth/auth.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { UserService } from '../../providers/user/user.service';

@Component({
  selector: 'login-loading',
  templateUrl: './login-loading.page.html',
  styleUrls: ['./login-loading.page.scss'],
})
export class LoginLoadingPage implements OnInit {
  constructor(private authService: AuthService, private navController: NavController, private router: Router, private userService:UserService) { }

  ngOnInit() {
    console.log("begin");
    this.authService.authObservable.subscribe(action => {
      console.log('action in login loading', action);
      if (action.action === AuthActions.SignInSuccess || action.action === AuthActions.AutoSignInSuccess) {
        /* console.log('action in ngoninit of login loading', action); */
        this.userService.configureUsers();
        console.log('configuring user from login-loading');
        this.navController.navigateRoot('/app');
      } else if (action.action === AuthActions.SignOutSuccess || action.action === AuthActions.AutoSignInFailed) {
        this.signIn();
      }
    });

    // todo: figure out why access denied is happening
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        // console.log('url', e.url);
      }
    });
  }

  signIn() {
    console.log('ready to sign in');
    this.authService.signIn().catch(error =>{ console.error(`Sign in error: ${error}`);
  });
  }
}

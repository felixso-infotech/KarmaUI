import { Component, OnInit } from '@angular/core';
import { AuthActions } from 'ionic-appauth';
import { AuthService } from '../../auth/auth.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'login-loading',
  templateUrl: './login-loading.page.html',
  styleUrls: ['./login-loading.page.scss'],
})
export class LoginLoadingPage implements OnInit {
  constructor(private authService: AuthService, private navController: NavController, private router: Router) { }

  ngOnInit() {
    console.log("begin");
    this.authService.authObservable.subscribe(action => {
      console.log('action', action);
      if (action.action === AuthActions.SignInSuccess || action.action === AuthActions.AutoSignInSuccess) {
        console.log('action', action);
        this.navController.navigateRoot('/app');
      } else if (action.action === AuthActions.SignOutSuccess) {
        // do nothing
      }
    });

    // todo: figure out why access denied is happening
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        // console.log('url', e.url);
      }
    });
  }

  ionViewDidEnter() {
    console.log('view entered');
    this.authService.signIn().catch(error =>{ console.error(`Sign in error: ${error}`);
    this.authService.signIn().catch(error => console.error(`Sign in error: ${error}`));
  });
  }
}

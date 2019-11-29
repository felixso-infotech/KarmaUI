import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../../auth.service';

@Component({
  template: '<p style="margin-left: 10px">Signing out...</p>'
})
export class EndSessionPage implements OnInit {
  constructor(private authService: AuthService, private navCtrl: NavController) {}

  ngOnInit() {
    console.log("end session works");
    this.authService.EndSessionCallBack();
    this.navCtrl.navigateRoot('login-loading');
  }
}

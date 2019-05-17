import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { KeycloakAdminClient } from 'keycloak-admin/lib/client';


@Component({
  selector: 'app-sign-up',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignUpPage implements OnInit {

  constructor(private navCtrl: NavController, private toastController: ToastController) {
    this.kcAdminClient = new KeycloakAdminClient();
    this.kcAdminClient.setConfig({
        baseUrl: 'http://35.196.86.249:8080/auth'
     });
    this.configureKeycloakAdmin();
  }

  username: string;
  password: string;
  email: string;
  kcAdminClient: KeycloakAdminClient;
  phone: number;
  agreement: boolean;

  configureKeycloakAdmin() {
    this.kcAdminClient.auth({
      username: 'admin',
      password: 'karma123',
      grantType: 'password',
      clientId: 'admin-cli'
    });
  }

  signup() {
    const map = new Map([
      ['phone', this.phone],
      ['value', 3]
    ]);

    this.kcAdminClient.users.create({
      realm: 'Karma',
      username: this.username,
      email: this.email,
      enabled: true,
      credentials: [{
        type: 'password',
        value: this.password
      }],
      attributes: map

    }).then(res => {
      this.navCtrl.navigateForward('/login');
    }, err => {
      console.log(err);
      this.presentToast('user already exists');
    });
  }

  dataChanged(agreement) {
    console.log('Old Agreement is ' + this.agreement);

    console.log('Agreement is ' + agreement);
    this.agreement = agreement;

  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      cssClass: 'toast'
    });
    await toast.present();
  }

  ngOnInit() {
    this.agreement = false;
  }
}
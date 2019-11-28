import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(public navController:NavController,public authService:AuthService) { }

  ngOnInit() {
  }

  logoutTemp(){
    this.navController.navigateRoot("implicit/logout")
  }

}

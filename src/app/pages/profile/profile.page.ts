import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../../auth/auth.service';
import { UserService } from '../../providers/user/user.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(public navController:NavController,public authService:AuthService, private userService: UserService) { }

  ngOnInit() {
/*     if(!this.userService.getUser()) {
      this.navController.navigateBack('/');
    } */
  }

  logoutTemp(){
    console.log('logout');
    
    this.authService.signOut();
  }

}

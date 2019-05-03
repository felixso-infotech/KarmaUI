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
  constructor(private activityService:ActivityService,private router: Router) { }

  ngOnInit() {
    this.user=this.activityService.currentUser;
  }
  logForm() {
    console.log(this.user);
    this.activityService.currentUser=this.user;
    this.router.navigate(['tabs/home/activities']);
  }

}

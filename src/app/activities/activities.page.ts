
import { ActivityService } from './../activity.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KarmaXapiService } from '../karma-xapi.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.page.html',
  styleUrls: ['./activities.page.scss']
  
})
export class ActivitiesPage implements OnInit {

  constructor(private router:Router,private service:KarmaXapiService, private activityService:ActivityService) { }

  activities: any;

  ngOnInit() {
    //this.activities=this.service.getMockActivities();
    this.activities=this.service.getActivities().subscribe(data=>{this.activities=data;console.log(this.activities);});
    //console.log(this.activities);
  }
  finishActivity(activity) {
    console.log(activity);
    this.activityService.currentActivity=activity;
    this.router.navigate(['tabs/home/finish']);
  }
}

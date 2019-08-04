import { LoginService } from './security/login.service';
import { InAppBrowser, InAppBrowserObject, InAppBrowserEvent } from '@ionic-native/in-app-browser/ngx';

import { ActivityModel } from './api/models/activity-model';
import { Oauth2User } from './user';
import { Injectable } from '@angular/core';
import { AggregateQueryResourceService } from './api/services';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  public activities: ActivityModel[];
  public currentActivity: ActivityModel;
  public currentActivityVideoUrl: string;
  public wheelActivities: string[] = [];
  isClosedActivityWithoutComplete: boolean = true;
  retryCount=3;

  constructor(private iab: InAppBrowser, private queryResourceService: AggregateQueryResourceService, private loginService: LoginService) {

  }
  launchActivity() {
    const browser: InAppBrowserObject = this.iab.create(this.currentActivity.url, '_blank',
      'location=no,clearsessioncache=yes,clearcache=yes,zoom=no,hideurlbar=yes');
    console.log("browser", browser);
    browser.on('loadstart').subscribe(event => {
      console.log("loadstart", event);
      if (((event.url).indexOf("https://facebook.com/felixsoinfotech") === 0) || ((event.url).indexOf("https://m.facebook.com/felixsoinfotech") === 0)) {
        this.isClosedActivityWithoutComplete = false;
        browser.close();
      }
    });
  }

  loadActivities() {
    this.wheelActivities = [];
    this.queryResourceService.findIncompletedActivityByRegisteredUserIdByQueryUsingGET({ 'registeredUserId': this.loginService.user.registeredUserId }).subscribe(response => {
      this.activities = response;
      console.log("Successfully got new activities", this.activities);
      this.activities.forEach(element => {
        this.wheelActivities.push(element.title);
      },
        error => {
          console.log("something went wrong when pushing elements to the wheel array", error);
        });
      this.currentActivity = this.activities[Math.floor(Math.random() * this.activities.length)];
      console.log("selected activity id", this.currentActivity);
    },
    error=>{
      console.log("something went wrong when getting new activities", error);
      if(this.retryCount>0){
        this.loadActivities();
        this.retryCount--;
      }
      
    });
  }
}


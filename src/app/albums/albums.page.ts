import { LoginService } from './../security/login.service';
import { Component, OnInit } from '@angular/core';
import { MediaModel } from '../api/models';
import { AggregateQueryResourceService } from '../api/services';
import { Oauth2User } from '../user';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.page.html',
  styleUrls: ['./albums.page.scss'],
})
export class AlbumsPage implements OnInit {

  constructor(private service:AggregateQueryResourceService,private activityService: ActivityService, private loginService:LoginService) { }

  media: MediaModel[];

  ngOnInit() {
    console.log("in albums ngoninit");
    this.service.findAllCompletedActivityMediasByRegisteredUserIdUsingGET({'registeredUserId':this.loginService.user.registeredUserId}).subscribe(response => {
      this.media = response;
      console.log("****response",response);
      console.log("****",this.media);
  },
  error=>{
    console.log("Error while retrieving media",error);
  });
   
  }

  ionViewWillEnter() {
    console.log("in ionViewWillEnter");
    this.service.findAllCompletedActivityMediasByRegisteredUserIdUsingGET({'registeredUserId':this.loginService.user.registeredUserId}).subscribe(response => {
      this.media = response;
      console.log("****response",response);
      console.log("****",this.media);
  },
  error=>{
    console.log("Error while retrieving media",error);
  });
  }
}

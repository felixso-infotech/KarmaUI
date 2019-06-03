import { Component, OnInit } from '@angular/core';
import { MediaModel } from '../api/models';
import { AggregateQueryResourceService } from '../api/services';
import { User } from '../user';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.page.html',
  styleUrls: ['./albums.page.scss'],
})
export class AlbumsPage implements OnInit {

  constructor(private service:AggregateQueryResourceService,private activityService: ActivityService) { }

  media: MediaModel[];
  user: User;
  ngOnInit() {
    this.user=this.activityService.currentUser;
    console.log("id in album*******",this.user.id);
    this.service.findAllCompletedActivityMediasByRegisteredUserIdUsingGET({'registeredUserId':this.user.id}).subscribe(response => {
      this.media = response;
      console.log("****response",response);
      console.log("****",this.media);
  });
   
  }
}

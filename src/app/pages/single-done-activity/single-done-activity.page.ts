import { Component, OnInit, ViewChild } from '@angular/core';
import { GatewayAggregateQueryResourceService } from '../../api/services';
import { CommittedActivityAggregate, CommittedActivityProfileAggregate } from '../../api/models';
import { ActivityService } from '../../activity.service';
import { IonSlides, ModalController } from '@ionic/angular';
import { CommentsComponent } from '../../comments-replies/comments/comments.component';

@Component({
  selector: 'single-done-activity',
  templateUrl: './single-done-activity.page.html',
  styleUrls: ['./single-done-activity.page.scss'],
})
export class SingleDoneActivityPage implements OnInit {


  currentComments = null;
  committedActivityProfileAggregate:CommittedActivityProfileAggregate;
  
  committedActivityAggregate:CommittedActivityAggregate;
  constructor(public activityService:ActivityService,public modalController: ModalController) { }

  ngOnInit() {
    this.committedActivityProfileAggregate=this.activityService.currentCommittedProfileAggregate;
  }

  async showComments(committedActivityId: number) {
    console.log("*****committedActivityId*****", committedActivityId);
      const modal = this.modalController.create({
        component: CommentsComponent,
        cssClass: "modal",
        componentProps: { committedActivityId: committedActivityId }
      }).then(modal => {
        this.currentComments = modal;
        modal.present();
      });
  }



}

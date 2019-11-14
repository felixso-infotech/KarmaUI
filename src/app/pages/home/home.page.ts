import { Component, OnInit, ViewChild } from '@angular/core';
import { CommittedActivity } from '../../interfaces/committed-activity';
import { timer } from 'rxjs';
import { MockDataService } from '../../providers/mock-data.service';
import { IonSlides, ModalController } from '@ionic/angular';
import { CommentsComponent } from '../../comments-replies/comments/comments.component';
import { AccountResourceService, GatewayAggregateQueryResourceService, UserResourceService, GatewayAggregateCommandResourceService } from '../../api/services';
import { CommittedActivityAggregate, LoveDTO } from '../../api/models';
import { DomSanitizer } from '@angular/platform-browser';
import { CompletedActivitiesService } from '../../providers/completed-activities.service';

@Component({
  selector: 'home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('slides', { static: false }) slides: IonSlides;

  slideOptions = {
    direction: 'vertical',
    slidesPerView: 1,
    initialSlide: 0,
    speed: 300,
    spaceBetween: 0,
    height: window.screen.height - 60
  };

  transformation: any;

  currentComments = null;
  completedActivities: CommittedActivity[]=[];
  isLiking: Boolean= false;
  committedActivityAggregate: CommittedActivityAggregate[]=[];
  backgroundImageUrls: String[]=[];

  loveDTO: LoveDTO = {};

  constructor(
    public gatewayAggregateQueryResource: GatewayAggregateQueryResourceService,
    public gatewayAggregateCommandResource: GatewayAggregateCommandResourceService,
    public mockService: MockDataService, public modalController: ModalController, public domSanitizer: DomSanitizer,
    public completedActivityService: CompletedActivitiesService) { }

  ngOnInit() {
    console.log("home page initialized");
    console.log("*********11");
    console.log("*********", this.committedActivityAggregate);
  }
  ionViewWillEnter() {
    console.log("method starts");
    this.gatewayAggregateQueryResource.getAllCommittedActivitiesByStatusUsingGET("DONE").subscribe((result) => {
    this.committedActivityAggregate = result;
      this.createActivityBackgroundImageUrls(result);
      this.completedActivityService.isSplashShowing=false;
      console.log("-------", result);
      console.log("*********13", this.committedActivityAggregate[1].imageStringContentType);
    });
  }
  loveThisFeedWithDoubleTap() {
    this.isLiking = true;
    timer(500).subscribe(() => {
      this.isLiking = false;
      console.log("this.isLiking", this.isLiking);
    });
    this.loveThisFeed();

  }
  loveThisFeed() {
    console.log("Liked this feed");
    this.slides.getActiveIndex().
      then(index => {
        console.log("active slide", index);
        if (!this.completedActivities[index].isLiked) {
          this.completedActivities[index].noOfLoves = "" + (+this.completedActivities[index].noOfLoves + 1);
          this.completedActivities[index].isLiked = true;
        }
      });
  }
  unLoveThisFeed() {
    console.log("Un Liked this feed");
    this.slides.getActiveIndex().
      then(index => {
        console.log("active slide", index);
        this.completedActivities[index].isLiked = false;
        this.completedActivities[index].noOfLoves = "" + (+this.completedActivities[index].noOfLoves - 1);

      });
  }
  async showComments(committedActivityId:number) {
    console.log("**********",committedActivityId);
    this.slides.getActiveIndex().then(index=>{
      this.mockService.currentCommittedActivity=this.completedActivities[index];
      console.log("ready to display the comments",this.completedActivities[index],this.mockService.currentCommittedActivity);
      const modal = this.modalController.create({
        component: CommentsComponent,
        cssClass: "modal",
        componentProps: {committedActivityId:committedActivityId}
      }).then(modal=>{
        this.currentComments=modal;
        modal.present();
      });
    });
  }

  closeComments() {
    this.modalController.dismiss().then(() => {
      console.log("modal closed");
    }).catch(error => {
      console.log(error);
    });
  }

  public getSanitazedUrl(part1: string, part2: string) {

    console.log("&&&&&&&&&&&&&&&&&&&&&&&&& I am in");
    let url = "data:" + part1 + ";base64," + part2;
    console.log("++++++" + url);
    console.log("sanitized url", this.domSanitizer.bypassSecurityTrustResourceUrl(url));

    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

  //The following method converts a base64 encoded string to blob and returns a blob url
  getBlobUrl(base64String: String, contentType: String) {
    const sliceSize = 512;
    const byteCharacters = atob(base64String + '');
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType + '' });
    console.log("blob url", URL.createObjectURL(blob));
    return URL.createObjectURL(blob);

  }

  createActivityBackgroundImageUrls(committedActivities: CommittedActivityAggregate[]) {
    committedActivities.forEach(data => {
      this.backgroundImageUrls.push(this.getBlobUrl(data.imageString, data.imageStringContentType));
    })
  }

  doLoveCommittedActivity(i: number, committedActivityId: number, userId: string) {

    if (this.committedActivityAggregate[i].liked == false) {
      this.committedActivityAggregate[i].liked = true;
      this.committedActivityAggregate[i].noOfLoves = this.committedActivityAggregate[i].noOfLoves + 1;
    }
    else {
      this.committedActivityAggregate[i].liked = false;
      this.committedActivityAggregate[i].noOfLoves = this.committedActivityAggregate[i].noOfLoves - 1;
    }
    
    
      this.loveDTO.commitedActivityId=committedActivityId;
      this.loveDTO.dateAndTime=this.getCurrentTime();
      //user id is taken from database
      this.loveDTO.userId="Sharai";
      if(this.committedActivityAggregate[i].liked==true){
      this.gatewayAggregateCommandResource.loveCommittedActivityUsingPOST(this.loveDTO).subscribe(
        (result)=>{
          console.log("****Saved loveDTO Result****",result);
        }
      );
    }
    else{
      this.gatewayAggregateCommandResource.unloveCommittedActivityUsingDELETE(this.loveDTO).subscribe(
        (result)=>{
          console.log("****Deleted loveDTO Result****",result);
        }
      );
    }
    
  }

  getCurrentTime(): string {
    let currentTime = new Date();
    let offset = currentTime.getTimezoneOffset();
    var hours = (Math.floor(offset / 60)).toString().replace("-", "");
    var minutes = (offset % 60).toString().replace("-", "");
    console.log("+++++++  " + (currentTime.toISOString()).split("Z")[0] + "+0" + hours + ":" + minutes);

    if (offset < 0) {
      return (currentTime.toISOString()).split("Z")[0] + "+0" + hours + ":" + minutes;
    }
    else {
      return (currentTime.toISOString()).split("Z")[0] + "-0" + hours + ":" + minutes;
    }
  }
}

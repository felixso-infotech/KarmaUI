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
import { UserService } from '../../providers/user/user.service';
import { DateService } from '../../providers/date.service';

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
  completedActivities: CommittedActivity[] = [];
  isLiking: Boolean = false;
  committedActivityAggregate: CommittedActivityAggregate[] = [];
  backgroundImageUrls: String[] = [];

  loveDTO: LoveDTO = {};

  constructor(
    public gatewayAggregateQueryResource: GatewayAggregateQueryResourceService,
    public gatewayAggregateCommandResource: GatewayAggregateCommandResourceService,
    public modalController: ModalController, public domSanitizer: DomSanitizer,
    public completedActivityService: CompletedActivitiesService, public userService: UserService,
    public dateService: DateService) { }

  ngOnInit() {
    console.log('user in home', this.userService.user);
    if (this.userService.user) {
      console.log('valid user present');
      this.gatewayAggregateQueryResource.getRegisteredUserByUserIdUsingGET(this.userService.user.preferred_username)
        .subscribe(response => {
          console.log(response);
          this.userService.registeredUser = response;
        }, error => {
          console.log('no user found in the server', error);
          if (error.status == 500) {
            this.gatewayAggregateCommandResource.createRegisteredUserUsingPOST({
              userId: this.userService.user.preferred_username,
              email: this.userService.user.email,
              firstName: this.userService.user.given_name,
              createdDate: this.dateService.getCurrentTime()
            }).subscribe(response => {
              console.log('user created', response);
              this.userService.registeredUser = response;
            }, err => console.log('error while creating the user', err))
          }
        });
    }
  }
  ionViewWillEnter() {
    console.log("home page initialized");
    console.log("*********11");
    console.log("*********", this.committedActivityAggregate);
    this.gatewayAggregateQueryResource.getAllCommittedActivitiesByStatusUsingGET({
      status: "DONE",
      unpaged: true,
      sortUnsorted: false,
      sortSorted: true
    }).subscribe((result) => {
      this.committedActivityAggregate = result;
      this.createActivityBackgroundImageUrls(result);
      this.completedActivityService.isSplashShowing = false;
      console.log("-------", result);
      /* console.log("*********13",this.committedActivityAggregate[1].imageStringContentType); */
    }, (error) => console.log("-Error- ", error));
  }
  loveThisFeedWithDoubleTap() {
    this.isLiking = true;
    timer(500).subscribe(() => {
      this.isLiking = false;
      console.log("this.isLiking", this.isLiking);
    });

    this.slides.getActiveIndex().then((index) => {
      if (!this.committedActivityAggregate[index].liked) {
        this.doLoveCommittedActivity(index, this.committedActivityAggregate[index].committedActivityId,
          this.committedActivityAggregate[index].userId);
      }
    }).catch((error) => { console.log("-Error- ", error) });

  }

  async showComments(committedActivityId: number) {
    console.log("*****committedActivityId*****", committedActivityId);
    this.slides.getActiveIndex().then(index => {
      const modal = this.modalController.create({
        component: CommentsComponent,
        cssClass: "modal",
        componentProps: { committedActivityId: committedActivityId }
      }).then(modal => {
        this.currentComments = modal;
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
    console.log("index***", i);
    console.log("committedActivityId*****", committedActivityId);
    console.log("&&&&&&before in love    ", this.committedActivityAggregate[i].liked);
    this.committedActivityAggregate[i].liked = true;
    console.log("&&&&&&before in love    ", this.committedActivityAggregate[i].liked);
    this.committedActivityAggregate[i].noOfLoves = this.committedActivityAggregate[i].noOfLoves + 1;

    this.loveDTO.commitedActivityId = committedActivityId;
    this.loveDTO.dateAndTime = this.getCurrentTime();
    this.loveDTO.userId = "Sharai";
    this.gatewayAggregateCommandResource.doLoveUsingPOST(this.loveDTO).subscribe(
      (result) => {
        console.log("****Saved loveDTO Result****", result)
      }, (error) => { console.log("Error ", error) }
    );

  }

  undoLoveCommittedActivity(i: number, committedActivityId: number, userId: string) {
    console.log("index***", i);
    console.log("committedActivityId*****", committedActivityId);
    console.log("&&&&&&before in unlove    ", this.committedActivityAggregate[i].liked);
    this.committedActivityAggregate[i].liked = false;
    console.log("&&&&&&after in unlove    ", this.committedActivityAggregate[i].liked);
    this.committedActivityAggregate[i].noOfLoves = this.committedActivityAggregate[i].noOfLoves - 1;

    this.loveDTO.commitedActivityId = committedActivityId;
    this.loveDTO.dateAndTime = this.getCurrentTime();
    //user id is taken from database
    this.loveDTO.userId = "Sharai";
    this.gatewayAggregateCommandResource.unloveCommentUsingDELETE(this.loveDTO).subscribe(
      (result) => {
        console.log("****deleted loveDTO Result****", result)
      }, (error) => { console.log("Error ", error) }
    );
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

  /* addAsUserCommittedActivity(actId:number,desc:string,committedActId:number){

    let committedActivityDTO: CommittedActivityDTO = {
      activityId: actId,
      createdDate:this.getCurrentTime(),
      description:desc,
      referenceId:committedActId,
      registeredUserId:3,
      status: "TODO"     
    }  

    this.gatewayAggregateCommandResource.createCommittedActivityUsingPOST(committedActivityDTO).subscribe((result)=>
    {console.log("Result commited activity-------",result)},(error)=>{console.log("Error ",error)});
  } */
}

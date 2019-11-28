import { Component, OnInit, ViewChild } from '@angular/core';
import { CommittedActivity } from '../../interfaces/committed-activity';
import { timer } from 'rxjs';
import { MockDataService } from '../../providers/mock-data.service';
import { IonSlides, ModalController, NavController, AlertController, LoadingController } from '@ionic/angular';
import { CommentsComponent } from '../../comments-replies/comments/comments.component';
import { AccountResourceService, GatewayAggregateQueryResourceService, UserResourceService, GatewayAggregateCommandResourceService } from '../../api/services';
import { CommittedActivityAggregate, LoveDTO, CommittedActivityStatusAggregate } from '../../api/models';
import { DomSanitizer } from '@angular/platform-browser';
import { CompletedActivitiesService } from '../../providers/completed-activities.service';
import { UserService } from '../../providers/user/user.service';
import { DateService } from '../../providers/date.service';
import { AuthService } from '../../auth/auth.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

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

  loading: HTMLIonLoadingElement;

  transformation: any;

  currentComments = null;
  completedActivities: CommittedActivity[] = [];
  isLiking: Boolean = false;
  committedActivityAggregate: CommittedActivityAggregate[] = [];
  backgroundImageUrls: String[] = [];

  loveDTO: LoveDTO = {};

  committedActivityStatusAggregate:CommittedActivityStatusAggregate={};

  regId:number;
  userId:string;

  constructor(
    public gatewayAggregateQueryResource: GatewayAggregateQueryResourceService,
    public gatewayAggregateCommandResource: GatewayAggregateCommandResourceService,
    public modalController: ModalController, public domSanitizer: DomSanitizer,
    public completedActivityService: CompletedActivitiesService, public userService: UserService,
    public dateService: DateService,public authService:AuthService,public navController:NavController,
    public alertController:AlertController,
    public loadingController: LoadingController,
    private socialSharing: SocialSharing) { }

  ngOnInit() {
    this.presentLoading();
    this.userService.configureUsers();
  }
  ionViewWillEnter() {
    console.log("home page initialized");
    console.log("*********11");
    console.log("*********", this.committedActivityAggregate);
    this.gatewayAggregateQueryResource.getAllCommittedActivitiesByStatusUsingGET({
      status: "DONE",
      unpaged: true,
      sortUnsorted: false,
      sortSorted: true,
      sort:["timeElapsed(ASC)"]
    }).subscribe((result)=>{this.committedActivityAggregate=result;
        this.createActivityBackgroundImageUrls(result);
        this.loading.dismiss();
        this.completedActivityService.isSplashShowing=false;
        console.log("-------",result);
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
    this.loveDTO.userId = this.userService.getRegisteredUser().userId;
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
    this.loveDTO.userId = this.userService.getRegisteredUser().userId;
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
  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: `<ion-img src="../../../assets/img/clock-trans.gif"></ion-img>`,
      duration: 60000,
      spinner: null,
      cssClass: 'loading',
      showBackdrop: false
    });
    await this.loading.present();
  }

  addAsUserCommittedActivity(index:number){
    this.presentAlert();
    console.log("****",index);
    console.log("(((((((",this.regId)

    let committedActivityAggregate=this.committedActivityAggregate[index];

    this.committedActivityStatusAggregate={
      activityId:committedActivityAggregate.activityId,
      createdDate:this.getCurrentTime(),
      description:committedActivityAggregate.activityDescription,
      referenceId:committedActivityAggregate.committedActivityId,
      registeredUserId:this.userService.getRegisteredUser().id,
      status:'TODO',
      userId:this.userService.getRegisteredUser().userId
    }
    console.log("Index ooooo  ",committedActivityAggregate);

    this.gatewayAggregateCommandResource.createCommittedActivityUsingPOST(this.committedActivityStatusAggregate).subscribe(
      (result)=>{
        console.log("****Saved committedActivityStatusAggregate Result****",result)
      },(error)=>{console.log("Error ",error)}
    );
  }
   
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Success',
      subHeader: '',
      message: 'Successfully added to do later list.',
      buttons: ['OK']
    });

    await alert.present();
  }
 share(message:string,imgUrl:string) {
   console.log('to be shared',message,imgUrl);
   this.socialSharing.share(message,null,imgUrl,null).then(data=>{
     console.log('the post can be shared',data);
   },error=>{
     console.log('something went wrong when sharing',error);
   })
 }
}

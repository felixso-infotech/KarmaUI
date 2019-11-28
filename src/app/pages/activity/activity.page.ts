import { Component, OnInit, ViewChild } from '@angular/core';
import { ImageService } from '../../providers/image.service';
import { ActivityService } from '../../activity.service';
import { IonSlides, AlertController, NavController } from '@ionic/angular';
import { CommittedActivityStatusAggregate } from '../../api/models';
import { DateService } from '../../providers/date.service';
import { UserService } from '../../providers/user/user.service';
import { GatewayAggregateCommandResourceService } from '../../api/services';

@Component({
  selector: 'activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
})
export class ActivityPage implements OnInit {

  @ViewChild('slides', { static: false }) slides: IonSlides;

  totalElements: number;

<<<<<<< HEAD
  committedActivityStatusAggregate:CommittedActivityStatusAggregate;
  
  constructor(public imageService: ImageService, public activityService: ActivityService,
    public gatewayAggregateCommandResource:GatewayAggregateCommandResourceService,public userService:UserService,public alertController: AlertController, public navController: NavController,public dateService:DateService) { }
 
=======


  constructor(public imageService: ImageService, public activityService: ActivityService,
    public alertController: AlertController, public navController: NavController) { }


>>>>>>> f46df13f471d335e6796d1bce58a57f320d1b10a
  slideOptions = {
    slidesPerView: 1,
    initialSlide: 0,
    speed: 300,
    spaceBetween: 0
  };
  ngOnInit() {
  }
  slideShowBegins() {
    console.log('slide show begins');
  }
  slideShowEnds() {
    console.log('slide show ends');
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Do you want to keep it in your do later list?',
      message: 'Press yes to keep this in your todo list to do it later. You can easily get it from your profile',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('user pressed no');
            this.navController.navigateRoot('app/tabs/karma');
          }
        }, {
          text: 'Yes',
          handler: () => {
            this.addToTodoLater();
            console.log('pressed Yes');
            this.navController.navigateRoot('app/tabs/karma');
          }
        }
      ]
    });

    await alert.present();
  }
<<<<<<< HEAD

  addToInprogress(){

    this.activityService.currentActivity;
    this.committedActivityStatusAggregate={
      activityId:this.activityService.currentActivity.activityId,
      createdDate:this.dateService.getCurrentTime(),
      registeredUserId:this.userService.getRegisteredUser().id,
      status:'INPROGRESS',
      userId:this.userService.getRegisteredUser().userId
    }

    this.gatewayAggregateCommandResource.createCommittedActivityUsingPOST(this.committedActivityStatusAggregate).subscribe(
      (result)=>{
        console.log("****Saved committedActivityStatusAggregate Result****",result)
      },(error)=>{console.log("Error ",error)}
    );
  }

  addToTodoLater(){

    this.activityService.currentActivity;
    this.committedActivityStatusAggregate={
      activityId:this.activityService.currentActivity.activityId,
      createdDate:this.dateService.getCurrentTime(),
      registeredUserId:this.userService.getRegisteredUser().id,
      status:'TODO',
      userId:this.userService.getRegisteredUser().userId
    }

    this.gatewayAggregateCommandResource.createCommittedActivityUsingPOST(this.committedActivityStatusAggregate).subscribe(
      (result)=>{
        console.log("****Saved committedActivityStatusAggregate Result****",result)
      },(error)=>{console.log("Error ",error)}
    );
=======
  finishActivity() {
    console.log('activity is now ready to finish');
    this.navController.navigateRoot('app/tabs/karma/finish-activity');
>>>>>>> f46df13f471d335e6796d1bce58a57f320d1b10a
  }
}

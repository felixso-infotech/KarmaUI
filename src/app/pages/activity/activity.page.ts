import { Component, OnInit, ViewChild } from '@angular/core';
import { ImageService } from '../../providers/image.service';
import { ActivityService } from '../../activity.service';
import { IonSlides, AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
})
export class ActivityPage implements OnInit {

  @ViewChild('slides', { static: false }) slides: IonSlides;

  totalElements: number;



  constructor(public imageService: ImageService, public activityService: ActivityService,
    public alertController: AlertController, public navController: NavController) { }


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
            console.log('pressed Yes');
            this.navController.navigateRoot('app/tabs/karma');
          }
        }
      ]
    });

    await alert.present();
  }
  finishActivity() {
    console.log('activity is now ready to finish');
    this.navController.navigateRoot('app/tabs/karma/finish-activity');
  }
}

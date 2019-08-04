/* import { ActivityDTO } from './../api/models/activity-dto';
import { ActivityService } from './../activity.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AggregateResourceService } from '../api/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  colors = [
    "#f1a11f",
    "#c44538",
    "#1fa48a",
    "#425569",
    "#20a48a",
    "#3185bd",
    "#d66012"
  ]; */
//10, 9, 6 ,2
/*   prizes = [
    "Hand of god",
    "The old days",
    "The unforgettable help",
    "My pet"
  ]; */
/*   activities:ActivityDTO[];
  wheelActivities:string[];
  activitySelected : ActivityDTO;

  constructor(private router: Router, private activityService: ActivityService,private alertController:AlertController,private service:AggregateResourceService) { }

  ngOnInit() {
    this.service.findInompletedActivityByRegisteredUserIdUsingGET({registeredUserId: 1}).subscribe(response=>{
      this.activities=response;
      this.activities.forEach(element => {
        this.wheelActivities.push(element.title);
      });
      this.activitySelected=this.activities[0];
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Congradulations..!',
      subHeader: 'Activity got: Hands of God', */
/*       message: 'This is an alert message.', */
/*       buttons: [{
        text: 'Spin again',
        role: 'cancel'
      },
      {
        text: 'Proceed',
        role: 'okay',
        handler: ()=>{
          this.router.navigate(['tabs/home/gratitude-challenge/1']);
        }
      }
      ]
    });

    await alert.present();
  }

  loadActivities() {
    setTimeout(() => {
      if (this.activityService.currentUser.name != "")
        this.router.navigate(['tabs/home/activities']);
      else
        this.router.navigate(['login']);
    }, 5000); */
/* this.router.navigate(['activities']); */
/*   }


  beforeSpin() { */
/*     (<any>window).AccountKitPlugin.loginWithPhoneNumber({	useAccessToken: true,
      defaultCountryCode: "IN",
      facebookNotificationsEnabled: true},
      data=>{
        console.log("verification success");
        console.log(data);
        (<any>window).AccountKitPlugin.getAccount(
          info=>{
            console.log(info.phoneNumber);
            this.registerService.phoneNumber=info.phoneNumber;
            this.router.navigate(['/register']);
          },
          err=>{console.log(err);})
        }
      ); */
/*       this.activitySelected=this.activities[Math.floor(Math.random() * this.activities.length)];
  }

  afterSpin() {
    this.presentAlert();
  }
}
 */
//# sourceMappingURL=home-copy.js.map
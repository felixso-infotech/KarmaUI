import { ActivityModel } from './../api/models/activity-model';
import { ActivityService } from './../activity.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

import { AggregateQueryResourceService } from '../api/services';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  colors = [
    '#f1a11f',
    '#c44538',
    '#1fa48a',
    '#425569',
    '#20a48a',
    '#3185bd',
    '#d66012'
  ];
  //10, 9, 6 ,2
/*   prizes = [
    "Hand of god",
    "The old days",
    "The unforgettable help",
    "My pet"
  ]; */
  activities: ActivityModel[];
  wheelActivities: string[] = [];
  activitySelected : ActivityModel;
  user: User;
  
  constructor(private router: Router,
// tslint:disable-next-line: max-line-length
    private navctrl: NavController, private activityService: ActivityService, private alertController:AlertController, private service:AggregateQueryResourceService,private activatedRoute: ActivatedRoute) { }

// tslint:disable-next-line: use-life-cycle-interface
  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngOnInit() {
    console.log('ngOninit');
    this.user=this.activityService.currentUser;
    console.log("id in home*******",this.user.id);
    this.service.findIncompletedActivityByRegisteredUserIdByQueryUsingGET({'registeredUserId':this.user.id}).subscribe(response => {
      this.activities = response;
      this.activities.forEach(element => {
        this.wheelActivities.push(element.title);
      });
      this.activitySelected=this.activities[0];
      //console.log(this.activitySelected);
    });
  }

  async presentAlert() {
    console.log('activity got',this.activitySelected.title);
    console.log('activity id',this.activitySelected.id);
    const alert = await this.alertController.create({
      header: 'Congradulations..!',
      subHeader: 'Activity got:'+this.activitySelected.title,
      message: 'This is an alert message.',
      buttons: [{
        text: 'Spin again',
        role: 'cancel'
      },
      {
        text: 'Proceed',
        role: 'okay',
        handler: () => {
          this.navctrl.navigateForward('tabs/home/gratitude-challenge/' + this.activitySelected.id);
        }
      }
      ]
    });

    await alert.present();
  }

  loadActivities() {
    setTimeout(() => {
// tslint:disable-next-line: triple-equals
      if (this.activityService.currentUser.username != '') {
        this.router.navigate(['tabs/home/activities']);
      } else {
        this.router.navigate(['login']);
      }
    }, 5000);
    this.router.navigate(['activities']);
  }


  beforeSpin() {
   /*  (<any>window).AccountKitPlugin.loginWithPhoneNumber({	useAccessToken: true,
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
      this.activitySelected = this.activities[Math.floor(Math.random() * this.activities.length)];
  }

  afterSpin() {
    this.presentAlert();
  }
 /* getRegisterUserId(): number {
    return +this.activatedRoute.snapshot.paramMap.get('id');
    }*/

}


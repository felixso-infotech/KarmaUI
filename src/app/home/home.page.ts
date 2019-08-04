import { ActivityModel } from './../api/models/activity-model';
import { ActivityService } from './../activity.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

import { AggregateQueryResourceService } from '../api/services';
import { Oauth2User } from '../user';
import { InstructionVideoModel } from '../api/models';
import { LoginService } from '../security/login.service';

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
  activitySelected : ActivityModel;
  instructionVideo: InstructionVideoModel;
  videoUrl: string;
  
  constructor(private router: Router,
// tslint:disable-next-line: max-line-length
    private navctrl: NavController, 
    private activityService: ActivityService, 
    private alertController:AlertController, 
    private service:AggregateQueryResourceService,
    private activatedRoute: ActivatedRoute,
    private loginService:LoginService) { }

// tslint:disable-next-line: use-life-cycle-interface
  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngOnInit() {
    console.log('ngOninit');
    console.log("id in home*******",this.loginService.user);
  }

  ionViewWillEnter() {
    console.log("home page-ionViewWillEnter",this.loginService.user);


    console.log("user in home page",this.loginService.user);
  }

  ionViewDidEnter() {
    console.log("home ionViewDidEnter");
  }

  ionViewWillLeave() {
    console.log("home ionViewWilLeave");
  }

  ionViewDidLeave() {
    console.log("home ionViewDidLeave");
  }

  ngOnDestroy() {
    console.log("home ngOnDestroy");
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Congradulations..!',
      subHeader: 'Activity got:'+  this.activityService.currentActivity.title,
      message: 'Click launch to play '+this.activityService.currentActivity.title,
      buttons: [
      {
        text: 'Launch',
        role: 'okay',
        handler: () => {
         /* this.service.getInstructionVideoByActivityIdUsingGET(this.activitySelected.id)
          .subscribe(result =>{
            this.instructionVideo = result;
            this.activityService.currentActivityVideoUrl='http://35.196.249.196:8075/KarmaApp/instruction-video/'+result.fileName+'.'+result.fileContentType;
            this.navctrl.navigateForward('tabs/home/gratitude-challenge/' + this.activitySelected.id);
          }, err => {
            console.log('Error retriving instruction video');
          });*/
          //this.activityService.currentActivity=this.activitySelected;
          this.activityService.launchActivity();
          this.navctrl.navigateForward("finish");
        }
       }
      ]
    });
    
    await alert.present();
  }

  loadActivities() {
    setTimeout(() => {
// tslint:disable-next-line: triple-equals
      if (this.loginService.user.userId != '') {
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


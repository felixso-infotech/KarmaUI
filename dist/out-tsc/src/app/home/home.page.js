import * as tslib_1 from "tslib";
import { ActivityService } from './../activity.service';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { AggregateQueryResourceService } from '../api/services';
import { LoginService } from '../security/login.service';
var HomePage = /** @class */ (function () {
    function HomePage(router, 
    // tslint:disable-next-line: max-line-length
    navctrl, activityService, alertController, service, activatedRoute, loginService) {
        this.router = router;
        this.navctrl = navctrl;
        this.activityService = activityService;
        this.alertController = alertController;
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.loginService = loginService;
        this.colors = [
            '#f1a11f',
            '#c44538',
            '#1fa48a',
            '#425569',
            '#20a48a',
            '#3185bd',
            '#d66012'
        ];
        this.wheelActivities = [];
    }
    // tslint:disable-next-line: use-life-cycle-interface
    HomePage.prototype.ngOnChanges = function () {
        console.log('ngOnChanges');
    };
    HomePage.prototype.ngOnInit = function () {
        console.log('ngOninit');
        console.log("id in home*******", this.loginService.user);
    };
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log("home page-ionViewWillEnter", this.loginService.user);
        this.activities = null;
        this.wheelActivities = [];
        this.service.findIncompletedActivityByRegisteredUserIdByQueryUsingGET({ 'registeredUserId': this.loginService.user.registeredUserId }).subscribe(function (response) {
            _this.activities = response;
            _this.activities.forEach(function (element) {
                _this.wheelActivities.push(element.title);
            });
            _this.activitySelected = _this.activities[Math.floor(Math.random() * _this.activities.length)];
            console.log("selected activity id", _this.activitySelected);
        });
        console.log("user in home page", this.loginService.user);
    };
    HomePage.prototype.ionViewDidEnter = function () {
        console.log("home ionViewDidEnter");
    };
    HomePage.prototype.ionViewWillLeave = function () {
        console.log("home ionViewWilLeave");
    };
    HomePage.prototype.ionViewDidLeave = function () {
        console.log("home ionViewDidLeave");
    };
    HomePage.prototype.ngOnDestroy = function () {
        console.log("home ngOnDestroy");
    };
    HomePage.prototype.presentAlert = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Congradulations..!',
                            subHeader: 'Activity got:' + this.activitySelected.title,
                            message: 'This is an alert message.',
                            buttons: [
                                {
                                    text: 'Proceed',
                                    role: 'okay',
                                    handler: function () {
                                        /* this.service.getInstructionVideoByActivityIdUsingGET(this.activitySelected.id)
                                         .subscribe(result =>{
                                           this.instructionVideo = result;
                                           this.activityService.currentActivityVideoUrl='http://35.196.249.196:8075/KarmaApp/instruction-video/'+result.fileName+'.'+result.fileContentType;
                                           this.navctrl.navigateForward('tabs/home/gratitude-challenge/' + this.activitySelected.id);
                                         }, err => {
                                           console.log('Error retriving instruction video');
                                         });*/
                                        _this.activityService.currentActivity = _this.activitySelected;
                                        _this.activityService.loadActivity();
                                        _this.navctrl.navigateForward("finish");
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.loadActivities = function () {
        var _this = this;
        setTimeout(function () {
            // tslint:disable-next-line: triple-equals
            if (_this.loginService.user.userId != '') {
                _this.router.navigate(['tabs/home/activities']);
            }
            else {
                _this.router.navigate(['login']);
            }
        }, 5000);
        this.router.navigate(['activities']);
    };
    HomePage.prototype.beforeSpin = function () {
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
    };
    HomePage.prototype.afterSpin = function () {
        this.presentAlert();
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.page.html',
            styleUrls: ['./home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            NavController,
            ActivityService,
            AlertController,
            AggregateQueryResourceService,
            ActivatedRoute,
            LoginService])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map
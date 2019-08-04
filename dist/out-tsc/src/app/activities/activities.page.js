import * as tslib_1 from "tslib";
import { ActivityService } from './../activity.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { KarmaXapiService } from '../karma-xapi.service';
var ActivitiesPage = /** @class */ (function () {
    function ActivitiesPage(router, service, activityService) {
        this.router = router;
        this.service = service;
        this.activityService = activityService;
    }
    ActivitiesPage.prototype.ngOnInit = function () {
        var _this = this;
        //this.activities=this.service.getMockActivities();
        this.activities = this.service.getActivities().subscribe(function (data) { _this.activities = data; console.log(_this.activities); });
        //console.log(this.activities);
    };
    ActivitiesPage.prototype.finishActivity = function (activity) {
        console.log(activity);
        this.activityService.currentActivity = activity;
        this.router.navigate(['tabs/home/finish']);
    };
    ActivitiesPage = tslib_1.__decorate([
        Component({
            selector: 'app-activities',
            templateUrl: './activities.page.html',
            styleUrls: ['./activities.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router, KarmaXapiService, ActivityService])
    ], ActivitiesPage);
    return ActivitiesPage;
}());
export { ActivitiesPage };
//# sourceMappingURL=activities.page.js.map
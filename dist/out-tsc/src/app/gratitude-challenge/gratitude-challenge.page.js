import * as tslib_1 from "tslib";
import { ActivityService } from './../activity.service';
import { Component } from '@angular/core';
import { AggregateQueryResourceService } from '../api/services';
import { ActivatedRoute } from '@angular/router';
var GratitudeChallengePage = /** @class */ (function () {
    function GratitudeChallengePage(aggregateResource, activatedRoute, activityService) {
        this.aggregateResource = aggregateResource;
        this.activatedRoute = activatedRoute;
        this.activityService = activityService;
        this.isVideoPlayed = true;
    }
    GratitudeChallengePage.prototype.ngOnInit = function () {
        var _this = this;
        console.log('ngOninit');
        // this.videoUrl=this.activityService.currentActivityVideoUrl;
        this.aggregateResource.getActivityByIdUsingGET({ activityId: this.getActivityId() }).subscribe(function (response) {
            /*      this.video = response; */
            _this.activityService.currentActivity = response;
            console.log(response);
            // console.log("video url in activity service***",this.activityService.currentActivityVideoUrl);
        }, function (error) {
            console.log(error);
        });
    };
    GratitudeChallengePage.prototype.getActivityId = function () {
        return +this.activatedRoute.snapshot.paramMap.get('id');
    };
    GratitudeChallengePage.prototype.getInstructionVideoUrl = function () {
        return this.activatedRoute.snapshot.paramMap.get('fileUrl');
    };
    GratitudeChallengePage.prototype.afterVideoPlayed = function () {
        this.isVideoPlayed = true;
    };
    GratitudeChallengePage = tslib_1.__decorate([
        Component({
            selector: 'app-gratitude-challenge',
            templateUrl: './gratitude-challenge.page.html',
            styleUrls: ['./gratitude-challenge.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AggregateQueryResourceService, ActivatedRoute, ActivityService])
    ], GratitudeChallengePage);
    return GratitudeChallengePage;
}());
export { GratitudeChallengePage };
//# sourceMappingURL=gratitude-challenge.page.js.map
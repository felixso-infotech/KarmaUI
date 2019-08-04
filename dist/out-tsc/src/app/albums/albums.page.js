import * as tslib_1 from "tslib";
import { LoginService } from './../security/login.service';
import { Component } from '@angular/core';
import { AggregateQueryResourceService } from '../api/services';
import { ActivityService } from '../activity.service';
var AlbumsPage = /** @class */ (function () {
    function AlbumsPage(service, activityService, loginService) {
        this.service = service;
        this.activityService = activityService;
        this.loginService = loginService;
    }
    AlbumsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.service.findAllCompletedActivityMediasByRegisteredUserIdUsingGET({ 'registeredUserId': this.loginService.user.registeredUserId }).subscribe(function (response) {
            _this.media = response;
            console.log("****response", response);
            console.log("****", _this.media);
        });
    };
    AlbumsPage = tslib_1.__decorate([
        Component({
            selector: 'app-albums',
            templateUrl: './albums.page.html',
            styleUrls: ['./albums.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AggregateQueryResourceService, ActivityService, LoginService])
    ], AlbumsPage);
    return AlbumsPage;
}());
export { AlbumsPage };
//# sourceMappingURL=albums.page.js.map
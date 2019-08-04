import * as tslib_1 from "tslib";
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Injectable } from '@angular/core';
var ActivityService = /** @class */ (function () {
    function ActivityService(iab) {
        this.iab = iab;
    }
    ActivityService.prototype.loadActivity = function () {
        var browser = this.iab.create(this.currentActivity.url, '_blank', 'location=no,clearsessioncache=yes,clearcache=yes,zoom=no,hideurlbar=yes');
        console.log("browser", browser);
        browser.on('loadstart').subscribe(function (event) {
            console.log("loadstart", event);
            if (((event.url).indexOf("https://facebook.com/felixsoinfotech") === 0) || ((event.url).indexOf("https://m.facebook.com/felixsoinfotech") === 0)) {
                browser.close();
            }
        });
    };
    ActivityService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [InAppBrowser])
    ], ActivityService);
    return ActivityService;
}());
export { ActivityService };
//# sourceMappingURL=activity.service.js.map
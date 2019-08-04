import * as tslib_1 from "tslib";
import { ActivityService } from './../activity.service';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
var SuccessPage = /** @class */ (function () {
    function SuccessPage(alertController, activityService) {
        this.alertController = alertController;
        this.activityService = activityService;
    }
    SuccessPage.prototype.ngAfterViewInit = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.message = this.activityService.currentActivity.successMessage;
                        _a = this;
                        return [4 /*yield*/, this.alertController.create({
                                message: this.activityService.currentActivity.successMessage,
                                buttons: [{
                                        text: 'OK',
                                        cssClass: 'alertButton'
                                    }],
                                cssClass: 'alert'
                            })];
                    case 1:
                        _a.alert = _b.sent();
                        this.alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    SuccessPage = tslib_1.__decorate([
        Component({
            selector: 'app-success',
            templateUrl: './success.page.html',
            styleUrls: ['./success.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AlertController, ActivityService])
    ], SuccessPage);
    return SuccessPage;
}());
export { SuccessPage };
//# sourceMappingURL=success.page.js.map
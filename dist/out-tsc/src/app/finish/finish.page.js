import * as tslib_1 from "tslib";
import { LoginService } from './../security/login.service';
import { ActivityService } from './../activity.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Camera } from '@ionic-native/camera/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { AggregateCommandResourceService } from '../api/services';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
var FinishPage = /** @class */ (function () {
    // tslint:disable-next-line: max-line-length
    function FinishPage(activityService, router, toastController, camera, socialSharing, service, imagePicker, base64, loginService) {
        this.activityService = activityService;
        this.router = router;
        this.toastController = toastController;
        this.camera = camera;
        this.socialSharing = socialSharing;
        this.service = service;
        this.imagePicker = imagePicker;
        this.base64 = base64;
        this.loginService = loginService;
        this.completedActivity = {
            proofs: []
        };
    }
    FinishPage.prototype.ngOnInit = function () {
    };
    FinishPage.prototype.sendStatements = function () {
        console.log('finish  user:' + this.loginService.user);
        console.log('finish  user:' + this.activityService.currentActivity);
        this.router.navigate(['success']);
    };
    FinishPage.prototype.presentToast = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Your settings have been saved.',
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    FinishPage.prototype.openCamera = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        console.log('in method open camera, {}', options);
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            console.log("camera: imageData", imageData);
            _this.imgURL = "data:image/jpg;base64," + imageData;
            _this.image = _this.imgURL;
            //this.save();
            // console.log(this.imgURL);
        }, function (err) {
            console.log(err);
        });
    };
    FinishPage.prototype.openGallery = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        };
        console.log('in method open gallery, {}', options);
        this.imageResponse = [];
        this.imagePicker.getPictures(options).then(function (imageData) {
            // this.imgURL = imageData;
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            console.log("open gallery: image data", imageData);
            console.log("image data: length", imageData.length);
            for (var i = 0; i <= imageData.length; i++) {
                console.log("****imageData**", imageData[i]);
                _this.imagePath = imageData[i];
                _this.base64.encodeFile(_this.imagePath).then(function (base64File) {
                    // console.log(base64File);
                    console.log("type", base64File.split(",")[1]);
                    _this.image = base64File.split(",")[1];
                    _this.imgURL = _this.image;
                    console.log("****image**", _this.image);
                });
                //this.save();
            }
        }, function (err) {
            console.log(err);
        });
    };
    FinishPage.prototype.save = function () {
        var _this = this;
        console.log("In save: this.save", this.image);
        if (this.image != null) {
            fetch(this.image).then(function (data) {
                console.log("data in fetch method", data);
                _this.completedActivity.proofs.push({
                    completedActivityId: _this.activityService.currentActivity.id,
                    file: _this.image
                    //fileContentType: this.,
                    //fileName: this.imgURL.data.fileName,
                    //  fileName: 'proof'+ this.activityService.currentActivity.title+this.activityService.currentUser.email,
                });
                _this.completedActivity.activityTitle = _this.activityService.currentActivity.title;
                _this.completedActivity.activityId = _this.activityService.currentActivity.id;
                _this.completedActivity.registeredUserId = _this.loginService.user.registeredUserId;
                _this.service.createCompletedActivityUsingPOST(_this.completedActivity)
                    .subscribe(function (result) {
                    _this.completedActivity = result;
                    console.log("completed activity saved ", result);
                    console.log("completed activity user id ", result.registeredUserId);
                }, function (err) {
                    console.log('Error creating completedActivity');
                });
            });
        }
    };
    FinishPage.prototype.share = function () {
        // tslint:disable-next-line: max-line-length
        this.socialSharing.share(this.activityService.currentActivity.successMessage, null, this.imgURL, null).then(function () { console.log('shared'); })
            .catch(function (err) { console.log(err); });
    };
    FinishPage = tslib_1.__decorate([
        Component({
            selector: 'app-finish',
            templateUrl: './finish.page.html',
            styleUrls: ['./finish.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivityService,
            Router,
            ToastController,
            Camera,
            SocialSharing,
            AggregateCommandResourceService, ImagePicker,
            Base64,
            LoginService])
    ], FinishPage);
    return FinishPage;
}());
export { FinishPage };
//# sourceMappingURL=finish.page.js.map
import { Component, OnInit } from '@angular/core';
import { RegisteredUserAggregate } from '../../api/models';
import { UserService } from '../../providers/user/user.service';
import { NavController, ModalController, ToastController } from '@ionic/angular';
import { ImageCropperUploadComponent } from '../../image-cropper-upload/image-cropper-upload.component';
import { ImageService } from '../../providers/image.service';
import { GatewayAggregateCommandResourceService } from '../../api/services';

@Component({
  selector: 'edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  //User to be edited
  registeredUser: RegisteredUserAggregate = {};

  constructor(private userService: UserService, private navController: NavController,
    private modalController: ModalController, public imageService: ImageService,
    private toastController: ToastController,
    private commandService: GatewayAggregateCommandResourceService) { }

  ngOnInit() {
    this.registeredUser = this.userService.getRegisteredUser();
    if (!this.registeredUser) {
      this.navController.navigateBack('/');
    }
    console.log("registered user to be edited", this.registeredUser);
    /*     {
          "coverPhoto": null,
          "coverPhotoContentType": null,
          "email": "test@gmail.com",
          "firstName": "test",
          "id": 10,
          "lastName": null,
          "noOfCompletedTasks": 0,
          "noOfLoves": null,
          "profilePicture": null,
          "profilePictureContentType": null,
          "userId": "testuser"
        } */
  }

  async cropImageForUploading() {

    console.log("image is ready to crop");

    const modal = await this.modalController.create({
      component: ImageCropperUploadComponent
    });
    return modal;
  }

  uploadPic(selectedFile: any, aspectRatio: number, resizeToWidth: number, roundCropper: boolean) {
    console.log('uploading profile pic started, event: ',selectedFile);
    console.log("aspect ratio, resize to width, round cropper", aspectRatio, resizeToWidth, roundCropper);
    
    this.imageService.cropImageProperties.aspectRatio = aspectRatio;
    this.imageService.cropImageProperties.resizeToWidth = resizeToWidth;
    this.imageService.cropImageProperties.roundCropper = roundCropper;
    this.cropImageForUploading().then((modal: HTMLIonModalElement) => {
      console.log("modal to be presented",modal);
      this.imageService.uploadImage(selectedFile, modal);
      modal.onDidDismiss().then(() => {
        console.log("modal dismissed",this.imageService.isImageCropped, this.imageService.croppedImage);

        if (this.imageService.isImageCropped && this.imageService.croppedImage) {
          let contentType = this.imageService.getContentTypeFromBase64(this.imageService.croppedImage);
          let image = this.imageService.getImageStringFromBase64(this.imageService.croppedImage);
          let user = this.userService.getRegisteredUser();
          console.log("profile pic or dp is going to update");
          console.log("contentType, image and user are ", contentType, image, user);

          if (roundCropper) {
            user.profilePictureContentType = contentType;
            user.profilePicture = image;
          }
          else {
            user.coverPhotoContentType = contentType;
            user.coverPhoto = image;
          }
          this.userService.setRegisteredUser(user);
          let message = roundCropper ? "Profile pic updated" : "Cover photo updated";
          this.updateRegisteredUser(user, message);
        }
      })
    });

  }

  async presentToast(message: String) {
    const toast = await this.toastController.create({
      message: message + '',
      duration: 2000
    });
    toast.present();
  }

  updateRegisteredUser(user?: RegisteredUserAggregate, message?: String) {
    this.commandService.updateRegisteredUserUsingPUT(user ? user : this.userService.getRegisteredUser())
      .subscribe(response => {
        console.log("registered user updated", response);
        this.userService.setRegisteredUser(response);
        this.presentToast(message?message:"user details updated successfully");
      }, err => {
        console.error("something went wrong when updating user", err);
        this.presentToast("something went wrong when updating user");
      });
  }
}

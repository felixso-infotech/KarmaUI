import { Component, OnInit, Input } from '@angular/core';
import { ImageService } from '../providers/image.service';
import { ModalController } from '@ionic/angular';
import { UserService } from '../providers/user/user.service';

@Component({
  selector: 'image-cropper-upload',
  templateUrl: './image-cropper-upload.component.html',
  styleUrls: ['./image-cropper-upload.component.scss'],
})
export class ImageCropperUploadComponent implements OnInit {
  
  constructor(private imageService: ImageService, public modalController: ModalController) { }

  ngOnInit() {
    console.log("image cropper component", this.imageService.uploadedImage);

  }
  close() {
    this.imageService.removeImage();
    this.modalController.dismiss();
  }

  selectImage() {
    this.imageService.uploadImage=null;
    this.imageService.finishCropping();
    this.modalController.dismiss();
  }
}

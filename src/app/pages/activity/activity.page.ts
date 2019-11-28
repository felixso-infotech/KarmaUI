import { Component, OnInit, ViewChild } from '@angular/core';
import { ImageService } from '../../providers/image.service';
import { ActivityService } from '../../activity.service';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
})
export class ActivityPage implements OnInit {

  @ViewChild('slides', { static: false }) slides: IonSlides;

  totalElements: number;
  
  constructor(public imageService: ImageService, public activityService: ActivityService) { }
 
  slideOptions = {
    slidesPerView: 1,
    initialSlide: 0,
    speed: 300,
    spaceBetween: 0
  };
  ngOnInit() {
  }
  slideShowBegins() {
    console.log('slide show begins');
  }
  slideShowEnds() {
    console.log('slide show ends');
  }
}

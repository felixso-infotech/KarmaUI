import { Component, OnInit } from '@angular/core';
import { CommittedActivity } from '../../interfaces/committed-activity';
import { from } from 'rxjs';
import { MockDataService } from '../../providers/mock-data.service';

@Component({
  selector: 'home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  slideOptions = {
    direction: 'vertical',
    slidesPerView: 1,
    initialSlide: 0,
    speed: 300,
    spaceBetween: 0,
    height: window.screen.height-60
  };

  transformation: any;

  completedActivities: CommittedActivity[];
  constructor(public mockService: MockDataService) { }

  ngOnInit() {
    console.log("home page initialized");
  }
  ionViewDidEnter() {
    this.mockService.getCompletedActivities().subscribe(data=>{
      console.log(data);
      this.completedActivities= data;
    })
    
  }
  loveThisFeed() {
    console.log("Liked this feed");
  }
}

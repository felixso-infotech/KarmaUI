import { Component, OnInit, ViewChild } from '@angular/core';
import { CommittedActivity } from '../../interfaces/committed-activity';
import { timer } from 'rxjs';
import { MockDataService } from '../../providers/mock-data.service';
import { IonSlides, ModalController } from '@ionic/angular';
import { CommentsComponent } from '../../comments-replies/comments/comments.component';

@Component({
  selector: 'home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('slides', {static: false}) slides: IonSlides;

  slideOptions = {
    direction: 'vertical',
    slidesPerView: 1,
    initialSlide: 0,
    speed: 300,
    spaceBetween: 0,
    height: window.screen.height-60
  };

  transformation: any;

  currentComments=null;
  completedActivities: CommittedActivity[];
  isLiking: Boolean= false;

  constructor(public mockService: MockDataService, public modalController: ModalController) { }

  ngOnInit() {
    console.log("home page initialized");
  }
  ionViewDidEnter() {
    this.mockService.getCompletedActivities().subscribe(data=>{
      console.log(data);
      this.completedActivities= data;
    })    
  }
  loveThisFeedWithDoubleTap(){
    this.isLiking=true;
    timer(500).subscribe(()=>{
      this.isLiking=false;
      console.log("this.isLiking",this.isLiking);
    });
    this.loveThisFeed();
  
  }
  loveThisFeed() {
    console.log("Liked this feed");
    this.slides.getActiveIndex().
      then(index=>{
        console.log("active slide",index);
        if(!this.completedActivities[index].isLiked){
          this.completedActivities[index].noOfLoves=""+(+this.completedActivities[index].noOfLoves+1);
          this.completedActivities[index].isLiked=true;
        }
      });
  }
  unLoveThisFeed() {
    console.log("Un Liked this feed");
    this.slides.getActiveIndex().
      then(index=>{
        console.log("active slide",index);
        this.completedActivities[index].isLiked=false;
          this.completedActivities[index].noOfLoves=""+(+this.completedActivities[index].noOfLoves-1);
        
      });
  }
  async showComments() {
    this.slides.getActiveIndex().then(index=>{
      this.mockService.currentCommittedActivity=this.completedActivities[index];
      console.log("ready to display the comments",this.completedActivities[index],this.mockService.currentCommittedActivity);
      const modal = this.modalController.create({
        component: CommentsComponent,
        cssClass: "modal"
      }).then(modal=>{
        this.currentComments=modal;
        modal.present();
      }); 
    }); 
  }

  closeComments() {
    this.modalController.dismiss().then(()=>{
      console.log("modal closed");
    }).catch(error=>{
      console.log(error);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../../providers/mock-data.service';
import { Comment } from '../../interfaces/comment';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {

  comments: Comment[];

  constructor(public mockService: MockDataService, public modalController:ModalController) { }

  ngOnInit() { }

  ionViewDidEnter() {
    this.mockService.getCommentsByCommittedActivityId().
      subscribe((data: any[])=>{
        this.comments=data;
        console.log("comments", this.comments);
      });
  }

  closeComments() {
    this.modalController.dismiss();
  }

  loveThisComment(index: number) {
          console.log("index of comment",index);
          console.log("selected comment",this.comments[index]);
          this.comments[index].noOfLikes=""+(+this.comments[index].noOfLikes+1);
          this.comments[index].isLiked=true;
        
  }
   unLoveThisComment(index: number) {
    console.log("index of comment",index);
    console.log("selected comment",this.comments[index]);
    this.comments[index].noOfLikes=""+(+this.comments[index].noOfLikes-1);
    this.comments[index].isLiked=false;
  } 
}

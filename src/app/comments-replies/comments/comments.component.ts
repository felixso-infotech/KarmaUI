import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../../providers/mock-data.service';
import { Comment } from '../../interfaces/comment';
import { ModalController } from '@ionic/angular';
import { RepliesComponent } from '../replies/replies.component';
import { CommentDTO } from '../../api/models';
import { GatewayAggregateCommandResourceService } from '../../api/services';

@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {

  commitedActivityId;  //data from modal componentProps

  commentDTO:CommentDTO={};

  comments: Comment[];

  constructor(public gatewayAggregateCommandResourceService:GatewayAggregateCommandResourceService,public mockService: MockDataService, public modalController:ModalController) { }

  ngOnInit() {
   }

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

  showReplies() {
    console.log("showing replies");
    const modal = this.modalController.create({
      component: RepliesComponent,
      cssClass: "modal"
    }).then(modal=>{
      modal.present();
    }); 
  }

  doComment(){
    this.commentDTO.commitedActivityId=this.commitedActivityId;
    this.commentDTO.userId="1";
    let dateTime=this.getCurrentTime();
    this.commentDTO.dateAndTime=dateTime;
    console.log("----"+this.commentDTO.dateAndTime);
    this.gatewayAggregateCommandResourceService.saveCommentUsingPOST(this.commentDTO).subscribe((result)=>
    {console.log("&&&&Result&&&&&",result)});
  }
 
  getCurrentTime():string{
    let currentTime=new Date();
    let offset=currentTime.getTimezoneOffset();
    var hours=(Math.floor(offset / 60)).toString().replace("-","");
    var minutes=(offset % 60).toString().replace("-","");
    console.log("+++++++  "+(currentTime.toISOString()).split("Z")[0]+"+0"+hours+":"+minutes);

    if(offset<0){
      return (currentTime.toISOString()).split("Z")[0]+"+0"+hours+":"+minutes;
    }
    else{
       return (currentTime.toISOString()).split("Z")[0]+"-0"+hours+":"+minutes;
    }  
  }
}

import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../../providers/mock-data.service';
import { Comment } from '../../interfaces/comment';
import { ModalController } from '@ionic/angular';
import { RepliesComponent } from '../replies/replies.component';
import { CommentDTO, LoveDTO, CommentAggregate } from '../../api/models';
import { GatewayAggregateCommandResourceService, GatewayAggregateQueryResourceService } from '../../api/services';

@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {

  committedActivityId;  //data from modal componentProps

  commentDTO:CommentDTO={};

  comments: Comment[];

  isLiked:boolean=false;//for testing

  commentAggregates: CommentAggregate[]=[];

  loveDTO:LoveDTO={};

  constructor(public gatewayAggregateQueryResourceService:GatewayAggregateQueryResourceService,
     public gatewayAggregateCommandResourceService:GatewayAggregateCommandResourceService,public mockService: MockDataService, public modalController:ModalController) { }

  ngOnInit() {
    console.log("[[[Id--------[[[",this.committedActivityId);
    this.gatewayAggregateQueryResourceService.getAllCommentsByCommitedActivityIdUsingGET({commitedActivityId: this.committedActivityId,
      unpaged: true,
      sortUnsorted: true,
      sortSorted: false}).subscribe((result)=>{this.commentAggregates=result;
      console.log("[[[[[[",result);
    });
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
    this.commentDTO.commitedActivityId=this.committedActivityId;
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

  doLoveComment(i:number,commentId:number){
    console.log("index***",i);
    console.log("CommentId*****",commentId);
    /* if(this.isLiked==false){
      this.isLiked=true;
    }
    else{
      this.isLiked=false;
    } */

     if(this.commentAggregates[i].liked==false){
      this.commentAggregates[i].liked=true;
      this.commentAggregates[i].noOfLoves=this.commentAggregates[i].noOfLoves+1;
    }
    else{
      this.commentAggregates[i].liked=false;
      this.commentAggregates[i].noOfLoves=this.commentAggregates[i].noOfLoves-1;
    }
    
    this.loveDTO.commentId=commentId;
    this.loveDTO.dateAndTime=this.getCurrentTime();
    //user id is taken from database
    this.loveDTO.userId="Sharai";

     this.gatewayAggregateCommandResourceService.loveCommittedActivityUsingPOST(this.loveDTO).subscribe(
      (result)=>{
        console.log("****loveDTO Result****",result)
      }
    );  
    
  }
}

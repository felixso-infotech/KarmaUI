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

  committedActivityId;  //data from modal componentProps from home ts

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

  showReplies(commentId:number) {
    console.log("**Comment id***",commentId);
    console.log("showing replies");
    const modal = this.modalController.create({
      component: RepliesComponent,
      cssClass: "modal",
      componentProps: {commentId:commentId}
    }).then(modal=>{
      modal.present();
    }); 
  }

  doComment(){

    let commentAggregate:CommentAggregate={
      /* commentId?: number;
      completedChallengeId?: number;
      createdDate?: string; */
      description: this.commentDTO.description,
      /* firstName?: string;
      lastName?: string;
      commitedActivityId?: number;
      noOfLoves?: number;
      noOfReplies?: this
      profilePicture?: string;
      profilePictureContentType?: string;
      timeElapsed?: string;
      userId?: string; */
    }
    this.commentAggregates.push(commentAggregate);

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
    if(this.commentAggregates[i].liked==false){
     this.gatewayAggregateCommandResourceService.loveCommittedActivityUsingPOST(this.loveDTO).subscribe(
      (result)=>{
        console.log("****loveDTO Result****",result)
      }
    ); 
    }
    else{ // to be chenged to delete love 
      this.gatewayAggregateCommandResourceService.loveCommittedActivityUsingPOST(this.loveDTO).subscribe(
        (result)=>{
          console.log("****loveDTO Result****",result)
        }
      ); 
    } 
    
  }
}

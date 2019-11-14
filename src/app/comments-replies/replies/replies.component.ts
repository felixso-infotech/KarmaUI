import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GatewayAggregateQueryResourceService, GatewayAggregateCommandResourceService } from '../../api/services';
import { CommentAggregate, ReplyAggregate, ReplyDTO, LoveDTO } from '../../api/models';

@Component({
  selector: 'replies',
  templateUrl: './replies.component.html',
  styleUrls: ['./replies.component.scss'],
})
export class RepliesComponent implements OnInit {

  commentId; ////data from modal componentProps from comment ts

  replyAggregates:ReplyAggregate[]=[];

  replyDTO:ReplyDTO={};//for reply data binding from UI

  loveDTO:LoveDTO={};

  constructor(public gatewayAggregateQueryResourceService:GatewayAggregateQueryResourceService,
    public gatewayAggregateCommandResourceService:GatewayAggregateCommandResourceService,public modalController: ModalController) { }

  ngOnInit() {
    this.gatewayAggregateQueryResourceService.getAllRepliesByCommentIdUsingGET({commentId: this.commentId,
      unpaged: true,
      sortUnsorted: true,
      sortSorted: false}).subscribe((result=>{
        this.replyAggregates=result;
        console.log("***Replys*****",this.replyAggregates);
      }));
  }
  
  closeReplies() {
    this.modalController.dismiss();
  }

  doReply(){

    let replyAggregate:ReplyAggregate={
     /*  noOfLoves?: number;
      commentId?: number; */
      description: this.replyDTO.description,
      /* firstName?: string;
      lastName?: string;
      liked?: boolean;
      dateAndTime?: string;
      profilePicture?: string;
      profilePictureContentType?: string;
      replyId?: number;
      timeElapsed?: string;
      userId?: string; */
    }
    this.replyAggregates.push(replyAggregate);

    this.replyDTO.commentId=this.commentId;
    this.replyDTO.dateAndTime=this.getCurrentTime();
    this.replyDTO.userId="Sharai";

    this.gatewayAggregateCommandResourceService.saveReplyUsingPOST(this.replyDTO).subscribe(
      (result)=>{
        console.log("***reply reponse***",result);
      }
    )
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

  doLoveReply(i:number,replyId:number){
    console.log("index***",i);
    console.log("CommentId*****",replyId);

     if(this.replyAggregates[i].liked==false){
      this.replyAggregates[i].liked=true;
      this.replyAggregates[i].noOfLoves=this.replyAggregates[i].noOfLoves+1;
    }
    else{
      this.replyAggregates[i].liked=false;
      this.replyAggregates[i].noOfLoves=this.replyAggregates[i].noOfLoves-1;
    }
    
    this.loveDTO.replyId=replyId;
    this.loveDTO.dateAndTime=this.getCurrentTime();
    //user id is taken from database
    this.loveDTO.userId="Sharai";

    if(this.replyAggregates[i].liked==false){
     this.gatewayAggregateCommandResourceService.doLoveUsingPOST(this.loveDTO).subscribe(
      (result)=>{
        console.log("****loveDTO Result****",result)
      }
    );  
    }
    else{  // to be chenged to delete love
      this.gatewayAggregateCommandResourceService.unloveReplyUsingDELETE(this.loveDTO).subscribe(
        (result)=>{
          console.log("****deleted loveDTO Result****",result)
        }
      ); 
    }
    
  }
}

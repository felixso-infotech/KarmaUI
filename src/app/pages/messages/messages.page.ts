import { Component, OnInit } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import * as $ from 'jquery';
import { UserService } from '../../providers/user/user.service';
import { AuthService } from '../../auth/auth.service';
import { Message } from './message';

@Component({
  selector: 'messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

  private serverUrl = 'http://35.209.40.232:8045/socket';
  private title = 'WebSockets chat';
  private stompClient;
  chat_input:any;
  chats = [];
  messages: Message[] = [];
  userId : any;
  message :Message;

  constructor(public userService: UserService, public authService: AuthService) {
    this.initializeWebSocketConnection();
  }

  ngOnInit() {
    console.log("inside message page");
    console.log("**********current user{}",this.authService.getUserInfo)
     console.log("user, registered user", this.userService.getUser(), this.userService.getRegisteredUser());
     this.userId=this.userService.getRegisteredUser().userId;
     console.log('user id***',this.userId);
    }

  initializeWebSocketConnection(){
    let ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    let that = this;
    console.log('inside initializeWebSocketConnection');
    this.stompClient.connect({}, function(frame) {
      that.stompClient.subscribe("/chat", (msg) => {
        if(msg.body) {

        that.message=JSON.parse(msg.body);
        console.log('that message body{}',that.message);
        that.messages.push(that.message);

        }
      });
    });
  }

  sendMessage(message){
	//let that = this;
	var msg = {
    content: $("#message-input").val(),
   // text: document.getElementById("text").value,
    sender: this.userId
  };
    this.stompClient.send("/app/send/message" , {}, JSON.stringify(msg));
    $('#input').val('');

  }

}

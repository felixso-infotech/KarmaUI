

import { Component, OnInit } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import * as $ from 'jquery';
import { UserService } from '../../providers/user/user.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

  private serverUrl = 'http://34.66.94.234:8045/socket';
  private title = 'WebSockets chat';
  private stompClient;
  chat_input:any;
  chats = [];
  messages: String[] = [];
  userId : any;

  constructor(public userService: UserService, public authService: AuthService) {
    this.initializeWebSocketConnection();
  }

  ngOnInit() {
    console.log("inside message page");
     console.log("user, registered user", this.userService.getUser(), this.userService.getRegisteredUser());
     this.userId=this.userService.getRegisteredUser().id;
     console.log('user id***',this.userId);
    }

  initializeWebSocketConnection(){
    let ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    let that = this;
    this.stompClient.connect({}, function(frame) {
      that.stompClient.subscribe("/chat", (message) => {
        if(message.body) {
         // $(".chat").append("<div class='message'>"+message.body+"</div>")
        that.messages.push(message.body);

         console.log(message.body);

         console.log('messages content**',that.messages[0]);

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

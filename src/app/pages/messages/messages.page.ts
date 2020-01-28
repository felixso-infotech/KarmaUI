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

  private serverUrl = 'http://35.208.4.27:8045/socket';
  private title = 'WebSockets chat';
  private stompClient;
  chat_input: any;
  chats = [];
  messages: String[] = [];
  userId: any;
  message = {
    content: '',
    sender: ''
  };

  constructor(public userService: UserService, public authService: AuthService) {
    this.initializeWebSocketConnection();
  }

  ngOnInit() {
    console.log('inside message page');
     console.log('user, registered user', this.userService.getUser(), this.userService.getRegisteredUser());
     this.userId = this.userService.getRegisteredUser().id;
     console.log('user id***', this.userId);
    }

  initializeWebSocketConnection() {
    const ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    const that = this;
    this.stompClient.connect({}, function(frame) {
      that.stompClient.subscribe('/chat', (message) => {
        if (message.body) {
         // $(".chat").append("<div class='message'>"+message.body+"</div>")
        that.messages.push(message.body);

         console.log(message.body);

         console.log('messages content**', that.messages[0]);

        }
      });
    });
  }

  sendMessage(message) {
//	const that = this;
	 this.message = {
    content: this.chat_input,
   // text: document.getElementById("text").value,
    sender: this.userId
  };
//  that.message.content =$('#message-input').val();
  // that.message.sender;: this.userId;

    this.stompClient.send('/app/send/message' , {}, JSON.stringify(message));
    $('#input').val('');

  }

}

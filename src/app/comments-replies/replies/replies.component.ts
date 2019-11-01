import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'replies',
  templateUrl: './replies.component.html',
  styleUrls: ['./replies.component.scss'],
})
export class RepliesComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}
  
  closeReplies() {
    this.modalController.dismiss();
  }
}

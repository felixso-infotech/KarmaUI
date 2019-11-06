import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments/comments.component';
import { RepliesComponent } from './replies/replies.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CommentsComponent,RepliesComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  entryComponents: [CommentsComponent,RepliesComponent],
  exports: [CommentsComponent,RepliesComponent]
})
export class CommentsRepliesModule { }

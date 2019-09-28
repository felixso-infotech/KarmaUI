import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments/comments.component';
import { RepliesComponent } from './replies/replies.component';



@NgModule({
  declarations: [CommentsComponent,RepliesComponent],
  imports: [
    CommonModule
  ],
  exports: [CommentsComponent,RepliesComponent]
})
export class CommentsRepliesModule { }

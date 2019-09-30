import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { CommentsRepliesModule } from '../../comments-replies/comments-replies.module';
import { CommentsComponent } from '../../comments-replies/comments/comments.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    CommentsRepliesModule
  ],
  declarations: [HomePage],
  entryComponents: [CommentsComponent]
})
export class HomePageModule {}

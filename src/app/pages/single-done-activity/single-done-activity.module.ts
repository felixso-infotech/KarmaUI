import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SingleDoneActivityPage } from './single-done-activity.page';

const routes: Routes = [
  {
    path: '',
    component: SingleDoneActivityPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SingleDoneActivityPage]
})
export class SingleDoneActivityPageModule {}

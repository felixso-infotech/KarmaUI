import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GratitudeChallengePage } from './gratitude-challenge.page';

const routes: Routes = [
  {
    path: '',
    component: GratitudeChallengePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GratitudeChallengePage]
})
export class GratitudeChallengePageModule {}

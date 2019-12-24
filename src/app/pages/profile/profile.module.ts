import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfilePage } from './profile.page';
import { UserAccountModule } from '../../user-account/user-account.module';
import { CommittedActivitiesModule } from '../../committed-activities/committed-activities.module';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  },
  {
    path: 'single-done-activity',
    loadChildren: './pages/single-done-activity/single-done-activity.module#SingleDoneActivityPageModule',
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserAccountModule,
    CommittedActivitiesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}

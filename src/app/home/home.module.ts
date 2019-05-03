import { ActivitiesPage } from './../activities/activities.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgxWheelModule } from 'ngx-wheel';

import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'activities',
    loadChildren: '../activities/activities.module#ActivitiesPageModule'
  },
  {
    path: 'finish',
    loadChildren: '../finish/finish.module#FinishPageModule'
  },
  {
    path: 'gratitude-challenge/:id',
    children: [
      {
        path: '',
        loadChildren: '../gratitude-challenge/gratitude-challenge.module#GratitudeChallengePageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NgxWheelModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}

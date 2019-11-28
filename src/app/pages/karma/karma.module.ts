import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { KarmaPage } from './karma.page';
import { PipemoduleModule } from '../../pipes/pipemodule/pipemodule.module';

const routes: Routes = [
  {
    path: '',
    component: KarmaPage
  },
  {
    path: 'activity',
    children: [
      {
        path: '',
        loadChildren: () => import('../activity/activity.module').then(m => m.ActivityPageModule)
      }
    ]
  },
  {
    path: 'finish-activity',
    children: [
      {
        path: '',
        loadChildren: () => import('../finish-activity/finish-activity.module').then(m => m.FinishActivityPageModule)
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
    PipemoduleModule
  ],
  declarations: [KarmaPage]
})
export class KarmaPageModule {}

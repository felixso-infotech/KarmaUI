import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SingleDoneActivityPage } from './single-done-activity.page';
import { PipemoduleModule } from '../../pipes/pipemodule/pipemodule.module';
import { ProfilePageModule } from '../profile/profile.module';
import { UserInfoComponent } from '../../user-account/user-info/user-info.component';
import { UserAccountModule } from '../../user-account/user-account.module';

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
    PipemoduleModule,
    UserAccountModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SingleDoneActivityPage]
})
export class SingleDoneActivityPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CreateRolemodelPage } from './create-rolemodel.page';

const routes: Routes = [
  {
    path: '',
    component: CreateRolemodelPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CreateRolemodelPage]
})
export class CreateRolemodelPageModule {}

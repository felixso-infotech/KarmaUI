import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './user-info/user-info.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [UserInfoComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [UserInfoComponent]
})
export class UserAccountModule { }

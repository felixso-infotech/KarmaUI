import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './user-info/user-info.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SafeHtmlPipe } from '../pipes/safe-html.pipe';
import { PipemoduleModule } from '../pipes/pipemodule/pipemodule.module';



@NgModule({
  declarations: [UserInfoComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,PipemoduleModule
  ],
  exports: [UserInfoComponent]
})
export class UserAccountModule { }

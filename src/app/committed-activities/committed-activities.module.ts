import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CommittedActivitiesComponent } from './committed-activities/committed-activities.component';
import { PipemoduleModule } from '../pipes/pipemodule/pipemodule.module';



@NgModule({
  declarations: [CommittedActivitiesComponent],
  imports: [
    CommonModule,
    IonicModule,PipemoduleModule
  ],
  exports: [CommittedActivitiesComponent]
})
export class CommittedActivitiesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CommittedActivitiesComponent } from './committed-activities/committed-activities.component';



@NgModule({
  declarations: [CommittedActivitiesComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [CommittedActivitiesComponent]
})
export class CommittedActivitiesModule { }

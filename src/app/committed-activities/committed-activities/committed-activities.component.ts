import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'committed-activities',
  templateUrl: './committed-activities.component.html',
  styleUrls: ['./committed-activities.component.scss'],
})
export class CommittedActivitiesComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  segmentChanged(event: any) {
    console.log(event.detail.value);
  }

}

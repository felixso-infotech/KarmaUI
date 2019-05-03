import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gratitude-challenge',
  templateUrl: './gratitude-challenge.page.html',
  styleUrls: ['./gratitude-challenge.page.scss'],
})
export class GratitudeChallengePage implements OnInit {

  isVideoPlayed=false;
  constructor() { }

  ngOnInit() {

  }
  afterVideoPlayed() {
    this.isVideoPlayed=true;
  }
}

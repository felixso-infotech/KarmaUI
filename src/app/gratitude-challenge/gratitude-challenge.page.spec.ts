import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GratitudeChallengePage } from './gratitude-challenge.page';

describe('GratitudeChallengePage', () => {
  let component: GratitudeChallengePage;
  let fixture: ComponentFixture<GratitudeChallengePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GratitudeChallengePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GratitudeChallengePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

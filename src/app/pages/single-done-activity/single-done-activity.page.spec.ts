import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDoneActivityPage } from './single-done-activity.page';

describe('SingleDoneActivityPage', () => {
  let component: SingleDoneActivityPage;
  let fixture: ComponentFixture<SingleDoneActivityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleDoneActivityPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleDoneActivityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

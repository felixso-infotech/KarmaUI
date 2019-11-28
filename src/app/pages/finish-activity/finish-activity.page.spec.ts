import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishActivityPage } from './finish-activity.page';

describe('FinishActivityPage', () => {
  let component: FinishActivityPage;
  let fixture: ComponentFixture<FinishActivityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishActivityPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishActivityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

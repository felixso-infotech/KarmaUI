import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KarmaPage } from './karma.page';

describe('KarmaPage', () => {
  let component: KarmaPage;
  let fixture: ComponentFixture<KarmaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KarmaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KarmaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRolemodelPage } from './create-rolemodel.page';

describe('CreateRolemodelPage', () => {
  let component: CreateRolemodelPage;
  let fixture: ComponentFixture<CreateRolemodelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRolemodelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRolemodelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

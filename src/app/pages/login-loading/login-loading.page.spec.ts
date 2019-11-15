import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLoadingPage } from './login-loading.page';

describe('LoginLoadingPage', () => {
  let component: LoginLoadingPage;
  let fixture: ComponentFixture<LoginLoadingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginLoadingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginLoadingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

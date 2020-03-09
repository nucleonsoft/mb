import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdbPage } from './userdb.page';

describe('UserdbPage', () => {
  let component: UserdbPage;
  let fixture: ComponentFixture<UserdbPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdbPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

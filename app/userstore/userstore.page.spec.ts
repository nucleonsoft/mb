import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserstorePage } from './userstore.page';

describe('UserstorePage', () => {
  let component: UserstorePage;
  let fixture: ComponentFixture<UserstorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserstorePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserstorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

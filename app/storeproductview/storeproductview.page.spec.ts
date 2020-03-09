import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreproductviewPage } from './storeproductview.page';

describe('StoreproductviewPage', () => {
  let component: StoreproductviewPage;
  let fixture: ComponentFixture<StoreproductviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreproductviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreproductviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

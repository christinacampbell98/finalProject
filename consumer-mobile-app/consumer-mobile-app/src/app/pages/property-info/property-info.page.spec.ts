import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyInfoPage } from './property-info.page';

describe('PropertyInfoPage', () => {
  let component: PropertyInfoPage;
  let fixture: ComponentFixture<PropertyInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

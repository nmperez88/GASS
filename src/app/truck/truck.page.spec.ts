import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckPage } from './truck.page';

describe('TruckPage', () => {
  let component: TruckPage;
  let fixture: ComponentFixture<TruckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryservicePage } from './historyservice.page';

describe('HistoryservicePage', () => {
  let component: HistoryservicePage;
  let fixture: ComponentFixture<HistoryservicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryservicePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryservicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

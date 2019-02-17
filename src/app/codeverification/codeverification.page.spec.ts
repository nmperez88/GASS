import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeverificationPage } from './codeverification.page';

describe('CodeverificationPage', () => {
  let component: CodeverificationPage;
  let fixture: ComponentFixture<CodeverificationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeverificationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeverificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

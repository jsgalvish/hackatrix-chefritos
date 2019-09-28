import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EduPage } from './edu.page';

describe('EduPage', () => {
  let component: EduPage;
  let fixture: ComponentFixture<EduPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EduPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EduPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

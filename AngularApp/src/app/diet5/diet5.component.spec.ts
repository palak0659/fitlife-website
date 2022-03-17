import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diet5Component } from './diet5.component';

describe('Diet5Component', () => {
  let component: Diet5Component;
  let fixture: ComponentFixture<Diet5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diet5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diet5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

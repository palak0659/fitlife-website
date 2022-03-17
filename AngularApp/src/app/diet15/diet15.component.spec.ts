import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diet15Component } from './diet15.component';

describe('Diet15Component', () => {
  let component: Diet15Component;
  let fixture: ComponentFixture<Diet15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diet15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diet15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

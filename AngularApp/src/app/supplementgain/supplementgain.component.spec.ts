import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplementgainComponent } from './supplementgain.component';

describe('SupplementgainComponent', () => {
  let component: SupplementgainComponent;
  let fixture: ComponentFixture<SupplementgainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplementgainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplementgainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

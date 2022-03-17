import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplementformComponent } from './supplementform.component';

describe('SupplementformComponent', () => {
  let component: SupplementformComponent;
  let fixture: ComponentFixture<SupplementformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplementformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplementformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

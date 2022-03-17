import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodybuildingformComponent } from './bodybuildingform.component';

describe('BodybuildingformComponent', () => {
  let component: BodybuildingformComponent;
  let fixture: ComponentFixture<BodybuildingformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodybuildingformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodybuildingformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DietformComponent } from './dietform.component';

describe('DietformComponent', () => {
  let component: DietformComponent;
  let fixture: ComponentFixture<DietformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DietformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

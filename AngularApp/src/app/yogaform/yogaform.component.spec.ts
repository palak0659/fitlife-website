import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YogaformComponent } from './yogaform.component';

describe('YogaformComponent', () => {
  let component: YogaformComponent;
  let fixture: ComponentFixture<YogaformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YogaformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YogaformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

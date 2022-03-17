import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YogaAsthmaComponent } from './yoga-asthma.component';

describe('YogaAsthmaComponent', () => {
  let component: YogaAsthmaComponent;
  let fixture: ComponentFixture<YogaAsthmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YogaAsthmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YogaAsthmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

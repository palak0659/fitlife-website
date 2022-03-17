import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YogaDietbetesComponent } from './yoga-dietbetes.component';

describe('YogaDietbetesComponent', () => {
  let component: YogaDietbetesComponent;
  let fixture: ComponentFixture<YogaDietbetesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YogaDietbetesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YogaDietbetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

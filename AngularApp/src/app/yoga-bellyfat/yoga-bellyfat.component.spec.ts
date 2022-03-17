import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YogaBellyfatComponent } from './yoga-bellyfat.component';

describe('YogaBellyfatComponent', () => {
  let component: YogaBellyfatComponent;
  let fixture: ComponentFixture<YogaBellyfatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YogaBellyfatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YogaBellyfatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

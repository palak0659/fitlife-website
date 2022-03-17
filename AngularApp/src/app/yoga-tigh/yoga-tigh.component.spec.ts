import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YogaTighComponent } from './yoga-tigh.component';

describe('YogaTighComponent', () => {
  let component: YogaTighComponent;
  let fixture: ComponentFixture<YogaTighComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YogaTighComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YogaTighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

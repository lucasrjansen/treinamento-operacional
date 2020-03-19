import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBarsComponent } from './dashboard-bars.component';

describe('DashboardBarsComponent', () => {
  let component: DashboardBarsComponent;
  let fixture: ComponentFixture<DashboardBarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardBarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

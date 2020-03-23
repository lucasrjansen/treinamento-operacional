import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BtnChartChangeComponent } from './btn-chart-change.component';
import { BtnChartChangeModule } from './btn-chart-change.module';

describe('BtnChartChangeComponent', () => {
  let component: BtnChartChangeComponent;
  let fixture: ComponentFixture<BtnChartChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BtnChartChangeModule, RouterTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnChartChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

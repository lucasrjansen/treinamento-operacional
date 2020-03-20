import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BtnReportProblemComponent } from './btn-report-problem.component';
import { BtnReportProblemModule } from './btn-report-problem.module';

describe('BtnReportProblemComponent', () => {
  let component: BtnReportProblemComponent;
  let fixture: ComponentFixture<BtnReportProblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BtnReportProblemModule, RouterTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnReportProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

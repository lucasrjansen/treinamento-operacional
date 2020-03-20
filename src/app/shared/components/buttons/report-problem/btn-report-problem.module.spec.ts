import { BtnReportProblemModule } from './btn-report-problem.module';

describe('BtnReportProblemModule', () => {
  let btnReportProblemModule: BtnReportProblemModule;

  beforeEach(() => {
    btnReportProblemModule = new BtnReportProblemModule();
  });

  it('should create an instance', () => {
    expect(btnReportProblemModule).toBeTruthy();
  });
});

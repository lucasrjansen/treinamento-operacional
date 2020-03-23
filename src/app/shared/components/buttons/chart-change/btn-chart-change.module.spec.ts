import { BtnChartChangeModule } from './btn-chart-change.module';

describe('BtnChartChangeModule', () => {
  let btnChartChangeModule: BtnChartChangeModule;

  beforeEach(() => {
    btnChartChangeModule = new BtnChartChangeModule();
  });

  it('should create an instance', () => {
    expect(btnChartChangeModule).toBeTruthy();
  });
});

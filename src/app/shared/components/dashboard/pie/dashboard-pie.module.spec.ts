import { DashboardPieModule } from './dashboard-pie.module';

describe('DashboardPieModule', () => {
  let dashboardPieModule: DashboardPieModule;

  beforeEach(() => {
    dashboardPieModule = new DashboardPieModule();
  });

  it('should create an instance', () => {
    expect(dashboardPieModule).toBeTruthy();
  });
});

import { DashboardBarsModule } from './dashboard-bars.module';

describe('DashboardBarsModule', () => {
  let dashboardBarsModule: DashboardBarsModule;

  beforeEach(() => {
    dashboardBarsModule = new DashboardBarsModule();
  });

  it('should create an instance', () => {
    expect(dashboardBarsModule).toBeTruthy();
  });
});

import { DashboardLineModule } from './dashboard-line.module';

describe('DashboardLineModule', () => {
  let dashboardLineModule: DashboardLineModule;

  beforeEach(() => {
    dashboardLineModule = new DashboardLineModule();
  });

  it('should create an instance', () => {
    expect(dashboardLineModule).toBeTruthy();
  });
});

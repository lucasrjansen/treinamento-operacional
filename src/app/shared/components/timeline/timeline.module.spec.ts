import { TimeLineModule } from './timeline.module';

describe('TimeLineModule', () => {
  let timeLineModule: TimeLineModule;

  beforeEach(() => {
    timeLineModule = new TimeLineModule();
  });

  it('should create an instance', () => {
    expect(timeLineModule).toBeTruthy();
  });
});

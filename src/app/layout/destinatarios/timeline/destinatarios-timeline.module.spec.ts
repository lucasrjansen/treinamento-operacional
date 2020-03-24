import { DestinatariosTimeLineModule } from './destinatarios-timeline.module';

describe('DestinatariosTimeLineModule', () => {
  let destinatariosTimeLineModule: DestinatariosTimeLineModule;

  beforeEach(() => {
    destinatariosTimeLineModule = new DestinatariosTimeLineModule();
  });

  it('should create an instance', () => {
    expect(destinatariosTimeLineModule).toBeTruthy();
  });
});

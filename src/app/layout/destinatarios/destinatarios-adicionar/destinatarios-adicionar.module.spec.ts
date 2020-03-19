import { DestinatariosAdicionarModule } from './destinatarios-adicionar.module';

describe('DestinatariosAdicionarModule', () => {
  let destinatariosAdicionarModule: DestinatariosAdicionarModule;

  beforeEach(() => {
    destinatariosAdicionarModule = new DestinatariosAdicionarModule();
  });

  it('should create an instance', () => {
    expect(destinatariosAdicionarModule).toBeTruthy();
  });
});

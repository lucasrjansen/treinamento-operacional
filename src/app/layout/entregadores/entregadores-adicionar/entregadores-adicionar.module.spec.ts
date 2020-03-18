import { EntregadoresAdicionarModule } from './entregadores-adicionar.module';

describe('EntregadoresAdicionarModule', () => {
  let entregadoresAdicionarModule: EntregadoresAdicionarModule;

  beforeEach(() => {
    entregadoresAdicionarModule = new EntregadoresAdicionarModule();
  });

  it('should create an instance', () => {
    expect(entregadoresAdicionarModule).toBeTruthy();
  });
});

import { EncomendasAdicionarModule } from './encomendas-adicionar.module';

describe('EncomendasAdicionarModule', () => {
  let encomendasAdicionarModule: EncomendasAdicionarModule;

  beforeEach(() => {
    encomendasAdicionarModule = new EncomendasAdicionarModule();
  });

  it('should create an instance', () => {
    expect(encomendasAdicionarModule).toBeTruthy();
  });
});

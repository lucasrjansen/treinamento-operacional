import { BtnSalvarModule } from './btn-salvar.module';

describe('BtnSalvarModule', () => {
  let btnSalvarModule: BtnSalvarModule;

  beforeEach(() => {
    btnSalvarModule = new BtnSalvarModule();
  });

  it('should create an instance', () => {
    expect(btnSalvarModule).toBeTruthy();
  });
});

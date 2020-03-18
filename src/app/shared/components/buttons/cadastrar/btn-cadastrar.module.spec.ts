import { BtnCadastrarModule } from './btn-cadastrar.module';

describe('BtnCadastrarModule', () => {
  let btnCadastrarModule: BtnCadastrarModule;

  beforeEach(() => {
    btnCadastrarModule = new BtnCadastrarModule();
  });

  it('should create an instance', () => {
    expect(btnCadastrarModule).toBeTruthy();
  });
});

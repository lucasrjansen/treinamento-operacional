import { BtnExcluirModule } from './btn-excluir.module';

describe('BtnExcluirModule', () => {
  let btnExcluirModule: BtnExcluirModule;

  beforeEach(() => {
    btnExcluirModule = new BtnExcluirModule();
  });

  it('should create an instance', () => {
    expect(btnExcluirModule).toBeTruthy();
  });
});

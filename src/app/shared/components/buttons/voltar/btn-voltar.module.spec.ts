import { BtnVoltarModule } from './btn-voltar.module';

describe('BtnVoltarModule', () => {
  let btnVoltarModule: BtnVoltarModule;

  beforeEach(() => {
    btnVoltarModule = new BtnVoltarModule();
  });

  it('should create an instance', () => {
    expect(btnVoltarModule).toBeTruthy();
  });
});

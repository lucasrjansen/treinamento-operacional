import { BtnEditarModule } from './btn-editar.module';

describe('BtnEditarModule', () => {
  let btnEditarModule: BtnEditarModule;

  beforeEach(() => {
    btnEditarModule = new BtnEditarModule();
  });

  it('should create an instance', () => {
    expect(btnEditarModule).toBeTruthy();
  });
});

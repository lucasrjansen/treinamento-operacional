import { BtnVisualizarModule } from './btn-visualizar.module';

describe('BtnVisualizarModule', () => {
  let btnVisualizarModule: BtnVisualizarModule;

  beforeEach(() => {
    btnVisualizarModule = new BtnVisualizarModule();
  });

  it('should create an instance', () => {
    expect(btnVisualizarModule).toBeTruthy();
  });
});

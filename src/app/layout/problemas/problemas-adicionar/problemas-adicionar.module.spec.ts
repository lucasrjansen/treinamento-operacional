import { ProblemasAdicionarModule } from './problemas-adicionar.module';

describe('ProblemasAdicionarModule', () => {
  let problemasAdicionarModule: ProblemasAdicionarModule;

  beforeEach(() => {
    problemasAdicionarModule = new ProblemasAdicionarModule();
  });

  it('should create an instance', () => {
    expect(problemasAdicionarModule).toBeTruthy();
  });
});

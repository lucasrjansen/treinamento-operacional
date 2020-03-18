import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { EntregadoresAdicionarComponent } from './entregadores-adicionar.component';
import { EntregadoresAdicionarModule } from './entregadores-adicionar.module';

describe('EntregadoresAdicionarComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ EntregadoresAdicionarModule, RouterTestingModule ],
    })
    .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(EntregadoresAdicionarComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});

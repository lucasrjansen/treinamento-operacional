import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarEncomendaComponent } from './visualizar-encomenda.component';

describe('VisualizarEncomendaComponent', () => {
  let component: VisualizarEncomendaComponent;
  let fixture: ComponentFixture<VisualizarEncomendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizarEncomendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarEncomendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

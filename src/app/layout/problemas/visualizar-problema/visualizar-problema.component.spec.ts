import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarProblemaComponent } from './visualizar-problema.component';

describe('VisualizarProblemaComponent', () => {
  let component: VisualizarProblemaComponent;
  let fixture: ComponentFixture<VisualizarProblemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizarProblemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarProblemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

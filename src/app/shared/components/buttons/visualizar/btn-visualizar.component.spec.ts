import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BtnVisualizarComponent } from './btn-visualizar.component';
import { BtnVisualizarModule } from './btn-visualizar.module';

describe('BtnVisualizarComponent', () => {
  let component: BtnVisualizarComponent;
  let fixture: ComponentFixture<BtnVisualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BtnVisualizarModule, RouterTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnVisualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

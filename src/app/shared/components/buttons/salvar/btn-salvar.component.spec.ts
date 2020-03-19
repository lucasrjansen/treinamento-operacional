import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BtnSalvarComponent } from './btn-salvar.component';
import { BtnSalvarModule } from './btn-salvar.module';

describe('BtnSalvarComponent', () => {
  let component: BtnSalvarComponent;
  let fixture: ComponentFixture<BtnSalvarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BtnSalvarModule, RouterTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnSalvarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

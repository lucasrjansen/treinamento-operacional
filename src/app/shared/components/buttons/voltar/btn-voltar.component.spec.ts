import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BtnVoltarComponent } from './btn-voltar.component';
import { BtnVoltarModule } from './btn-voltar.module';

describe('BtnVoltarComponent', () => {
  let component: BtnVoltarComponent;
  let fixture: ComponentFixture<BtnVoltarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BtnVoltarModule, RouterTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnVoltarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

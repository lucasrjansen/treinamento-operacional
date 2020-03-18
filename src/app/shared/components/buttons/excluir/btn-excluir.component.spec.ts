import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BtnExcluirComponent } from './btn-excluir.component';
import { BtnExcluirModule } from './btn-excluir.module';

describe('BtnExcluirComponent', () => {
  let component: BtnExcluirComponent;
  let fixture: ComponentFixture<BtnExcluirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BtnExcluirModule, RouterTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnExcluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

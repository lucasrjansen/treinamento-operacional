import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BtnCadastrarComponent } from './btn-cadastrar.component';
import { BtnCadastrarModule } from './btn-cadastrar.module';

describe('BtnCadastrarComponent', () => {
  let component: BtnCadastrarComponent;
  let fixture: ComponentFixture<BtnCadastrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BtnCadastrarModule, RouterTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

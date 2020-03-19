import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BtnEditarComponent } from './btn-editar.component';
import { BtnEditarModule } from './btn-editar.module';

describe('BtnEditarComponent', () => {
  let component: BtnEditarComponent;
  let fixture: ComponentFixture<BtnEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BtnEditarModule, RouterTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

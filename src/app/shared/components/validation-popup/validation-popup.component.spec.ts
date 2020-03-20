import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ValidationPopupComponent } from './validation-popup.component';
import { ValidationPopupModule } from './validation-popup.module';

describe('ValidationPopupComponent', () => {
  let component: ValidationPopupComponent;
  let fixture: ComponentFixture<ValidationPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ValidationPopupModule, RouterTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

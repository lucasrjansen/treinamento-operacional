import { ValidationPopupModule } from './validation-popup.module';

describe('ValidationPopupModule', () => {
  let validationPopupModule: ValidationPopupModule;

  beforeEach(() => {
    validationPopupModule = new ValidationPopupModule();
  });

  it('should create an instance', () => {
    expect(validationPopupModule).toBeTruthy();
  });
});

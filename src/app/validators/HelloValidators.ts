import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function forbiddenNameValidator(forbiddenNames: string[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const foundForbiddenName = forbiddenNames.find(name => name === control.value);
    if (foundForbiddenName) {
      return {forbiddenName: {forbiddenName: foundForbiddenName}};
    }
    return null;
  };
}

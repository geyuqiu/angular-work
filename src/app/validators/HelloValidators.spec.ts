import {forbiddenNameValidator} from './HelloValidators';
import {AbstractControl} from '@angular/forms';

describe('HelloValidators', () => {
  describe('forbiddenNameValidator', () => {
    it('returns null when value is not part of forbiddenNames', () => {
      const validatorFn = forbiddenNameValidator([]);
      const validationResult = validatorFn({value: 'Max Mustermann'} as AbstractControl);
      expect(validationResult).toBeNull();
    });

    it('returns error when value is part of forbidden names', () => {
      const validatorFn = forbiddenNameValidator(['Max', 'Alex', 'Robert']);
      expect(validatorFn({value: 'Max'} as AbstractControl)).toEqual({forbiddenName: {forbiddenName: 'Max'}});
      expect(validatorFn({value: 'Alex'} as AbstractControl)).toEqual({forbiddenName: {forbiddenName: 'Alex'}});
      expect(validatorFn({value: 'Robert'} as AbstractControl)).toEqual({forbiddenName: {forbiddenName: 'Robert'}});
    });
  });
});

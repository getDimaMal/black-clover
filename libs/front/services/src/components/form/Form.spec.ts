import { IsString, MinLength } from 'class-validator';
import * as ClassValidator from 'class-validator';

import { Form } from './Form';

class TestDto {
  @IsString()
  @MinLength(3)
  firstName: string;

  @IsString()
  lastName: string;
}

const initForm: TestDto = {
  firstName: 'Rick',
  lastName: 'Sanchez',
};

describe('Form', () => {
  let form: Form<TestDto>;

  beforeEach(() => {
    form = new Form({ initForm, Resolver: TestDto });
  });

  it('should return init form', () => {
    expect(form.getForm()).toEqual(initForm);
  });

  it('should return value of form', () => {
    expect(form.getValue('firstName')).toEqual(initForm['firstName']);
  });

  it('should update form', () => {
    const firstName = 'Morty';
    form.setValue('firstName', firstName);
    expect(form.getForm()).toEqual({ ...initForm, firstName });
  });

  it('should return empty error object', () => {
    expect(form.hasError()).toBeFalsy();
    expect(form.getErrors()).toEqual({});
  });

  describe('validate', () => {
    it('should validate and return error', () => {
      form.setValue('firstName', 'F');
      expect(form.validate('firstName')).not.toBeNull();
      expect(form.getError('firstName')).not.toBeNull();
    });

    it('should validate and return undefined', () => {
      expect(form.validate('firstName')).toBeUndefined();
    });

    it('should validate and return undefined when constraints is undefined', () => {
      jest.mock('class-validator');
      jest.spyOn(ClassValidator, 'validateSync').mockReturnValue([{ property: 'firstName', constraints: undefined }]);
      expect(form.validate('firstName')).toBeUndefined();
    });
  });
});

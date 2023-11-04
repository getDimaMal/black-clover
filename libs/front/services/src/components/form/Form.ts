import { ClassConstructor } from 'class-transformer';
import { validateSync } from 'class-validator';

type FormArgs<FORM> = {
  initForm: FORM;
  Resolver: ClassConstructor<FORM>;
};

export interface FormInterface<FORM> {
  getForm: () => FORM;
  hasError: () => boolean;
  getErrors: () => Record<keyof FORM, string>;
  validate: (name: keyof FORM) => string;
  getError: (name: keyof FORM) => string;
  getValue: (name: keyof FORM) => FORM[keyof FORM];
  setValue: (name: keyof FORM, value: FORM[keyof FORM]) => FORM[keyof FORM];
}

export class Form<FORM extends object> implements FormInterface<FORM> {
  private form: FORM;
  private errors: Record<keyof FORM, string>;
  private readonly resolver: FORM;

  constructor({ initForm, Resolver }: FormArgs<FORM>) {
    this.form = initForm;
    this.resolver = new Resolver();
    this.errors = {} as Record<keyof FORM, string>;
  }

  validate = (name: keyof FORM) => {
    Object.assign(this.resolver, this.form);

    const result = validateSync(this.resolver, { validationError: { target: false } }).map(
      ({ property, constraints = {} }) => [property, Object.values(constraints)[0]]
    ) as [keyof FORM, string][];

    this.errors = { ...(Object.fromEntries(result) as Record<keyof FORM, string>) };

    return this.errors[name];
  };

  setValue = (name: keyof FORM, value: FORM[keyof FORM]) => {
    this.form = { ...this.form, [name]: value };
    return value;
  };

  getValue = (name: keyof FORM) => this.form[name];

  getError = (name: keyof FORM) => this.errors[name];

  getForm = () => this.form;

  getErrors = () => this.errors;

  hasError = () => Boolean(Object.keys(this.errors).length);
}

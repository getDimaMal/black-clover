import React, { useCallback, useEffect, useState } from 'react';
import { ClassConstructor } from 'class-transformer';
import { validateSync } from 'class-validator';

export type TUseFormProps<Form> = {
  initForm: Form;
  Resolver: ClassConstructor<Form>;
};

export type TGetInputProps<Form> = (name: keyof Form) => {
  name: keyof Form;
  value: Form[keyof Form];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
} & Partial<{
  error: null | string;
}>;

export const useForm = <Form extends object>({ initForm, Resolver }: TUseFormProps<Form>) => {
  const [values, setValues] = useState<Form>(initForm);
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Form, boolean>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const resolver = new Resolver();
    Object.assign(resolver, values);

    const result = validateSync(resolver, { validationError: { target: false } })
      .map(({ property, constraints }) => (constraints ? [property, Object.values(constraints)[0]] : null))
      .filter((pair) => !!pair) as [keyof Form, string][];

    const newErrors = Object.fromEntries(result) as Partial<Record<keyof Form, string>>;
    setErrors({ ...newErrors });
  }, [Resolver, values]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const { name, value } = event.target;
    setValues((old) => ({ ...old, [name]: value }));
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const { name } = event.target;
    setTouched((old) => ({ ...old, [name]: true }));
  };

  const handleSubmit = useCallback(
    (callback: (args: Form) => void) => (event: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
      event.preventDefault();
      event.stopPropagation();

      const hasError = Boolean(Object.keys(errors).length);
      !hasError && callback(values);
      setIsSubmitted(true);
    },
    [errors, values]
  );

  const getInputProps = useCallback(
    (name: keyof Form): ReturnType<TGetInputProps<Form>> => ({
      name,
      value: values[name],
      error: touched[name] || isSubmitted ? errors[name] : null,
      onChange: handleChange,
      onBlur: handleBlur,
    }),
    [errors, isSubmitted, touched, values]
  );

  return { handleSubmit, getInputProps };
};

export default useForm;

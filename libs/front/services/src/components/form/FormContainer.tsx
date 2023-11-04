import React, { MutableRefObject } from 'react';
import { ClassConstructor } from 'class-transformer';

import { FormInterface } from './Form';
import { useForm } from './useForm';

export type FormContainerRenderProps<FORM> = {
  isSubmitted: boolean;
  control: MutableRefObject<FormInterface<FORM>>;
};

type FormContainerProps<FORM> = {
  initForm: FORM;
  onSubmit: (data: FORM) => void;
  Resolver: ClassConstructor<FORM>;
  render: (props: FormContainerRenderProps<FORM>) => JSX.Element;
};

const FormContainer = <FORM extends object>({ initForm, onSubmit, Resolver, render }: FormContainerProps<FORM>) => {
  const { control, handleSubmit, isSubmitted } = useForm({ initForm, Resolver });

  return (
    <form noValidate aria-label="form" onSubmit={handleSubmit(onSubmit)}>
      {render({ control, isSubmitted })}
    </form>
  );
};

export default FormContainer;

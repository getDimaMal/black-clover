import React from 'react';
import * as authHook from '@black-clover/front/api';
import { CreateUserDto } from '@black-clover/shared/dto/users/create-user.dto';
import { TokenUserDto } from '@black-clover/shared/dto/users/token-user.dto';

import { fireEvent } from '../../../../jest.setup';
import { customRender } from '../../../test-utils';
import { FormContainerRenderProps } from '../../form/FormContainer';

import SignUp, { SignUpProps } from './SignUp';

type ResultType = ReturnType<typeof authHook.useSignUp>;
const mockSignUp = jest.fn();
const getResult = (result: Partial<ResultType> = {}): ResultType => ({
  user: null,
  error: null,
  status: 'idle',
  isLoading: false,
  signUp: mockSignUp,
  ...result,
});
jest.mock('@black-clover/front/api', () => ({
  useSignUp: jest.fn<ResultType, unknown[]>(() => getResult()),
}));

const getForm = (form: Partial<CreateUserDto> = {}): CreateUserDto => ({
  email: 'mail@mail.com',
  password: 'password123',
  ...form,
});
const renderForm = (control: FormContainerRenderProps<CreateUserDto>['control'], form: CreateUserDto = getForm()) => {
  control.current.setValue('email', form.email);
  control.current.setValue('password', form.password);
  return <div />;
};

const getProps = (props: Partial<SignUpProps> = {}): SignUpProps => ({
  onSuccess: jest.fn(),
  render: ({ control }) => renderForm(control),
  ...props,
});

describe('SignUp', () => {
  it('should render default', () => {
    const test = 'test';
    const props = getProps({ render: () => <div>{test}</div> });
    const { getByText } = customRender(<SignUp {...props} />);

    expect(props.onSuccess).not.toHaveBeenCalled();
    expect(getByText(test)).toBeInTheDocument();
  });

  it('should call onSuccess', () => {
    jest.spyOn(authHook, 'useSignUp').mockReturnValue(getResult({ user: {} as TokenUserDto, status: 'success' }));

    const props = getProps();
    customRender(<SignUp {...props} />);

    expect(props.onSuccess).toHaveBeenCalledTimes(1);
  });

  describe('signUp', () => {
    it('should call when form has NO errors', () => {
      const { getByRole } = customRender(<SignUp {...getProps()} />);

      fireEvent.submit(getByRole('form'));
      expect(mockSignUp).toHaveBeenCalledTimes(1);
      expect(mockSignUp).toHaveBeenCalledWith(getForm());
    });

    it.each<[string, CreateUserDto]>([
      ['email is not valid', getForm({ email: 'Not Email' })],
      ['password too short', getForm({ password: 'qwe123' })],
      ['password has only numbers', getForm({ password: '123456' })],
      ['password has only letters', getForm({ password: 'text password' })],
    ])('should NOT call when: %s', (_, form) => {
      const props = getProps({ render: ({ control }) => renderForm(control, form) });
      const { getByRole } = customRender(<SignUp {...props} />);

      fireEvent.submit(getByRole('form'));
      expect(mockSignUp).not.toHaveBeenCalled();
    });
  });
});

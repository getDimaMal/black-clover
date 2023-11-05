import React, { FC, useEffect } from 'react';
import { useSignUp } from '@black-clover/front/api';
import { CreateUserDto } from '@black-clover/shared/dto/users/create-user.dto';
import { TokenUserDto } from '@black-clover/shared/dto/users/token-user.dto';

import FormContainer, { FormContainerRenderProps } from '../../form/FormContainer';

type RenderProps = {
  isLoading: boolean;
  error: string | null;
} & FormContainerRenderProps<CreateUserDto>;

export type SignUpProps = {
  onSuccess: (data: TokenUserDto) => void;
  render: (props: RenderProps) => JSX.Element;
};

const initForm: CreateUserDto = { email: '', password: '' };

const SignUp: FC<SignUpProps> = ({ onSuccess, render }) => {
  const { signUp, user, error, status, isLoading } = useSignUp();

  useEffect(() => {
    if (status === 'success' && user) {
      onSuccess(user);
    }
  }, [onSuccess, status, user]);

  return (
    <FormContainer
      onSubmit={signUp}
      initForm={initForm}
      Resolver={CreateUserDto}
      render={(props) => render({ ...props, error, isLoading })}
    />
  );
};

export default SignUp;

import React, { FC } from 'react';
import { SignUpFormProps } from '@black-clover/front/shared/types/auth.type';
import { CreateUserDto } from '@black-clover/shared/dto/users/create-user.dto';

import useForm from '../../../../hooks/useForm';
import Button from '../../../atoms/Buttons/Button/Button';
import Link from '../../../atoms/Buttons/Link/Link';
import TextField from '../../../atoms/Inputs/TextField/TextField';
import Typography from '../../../atoms/Typography/Typography';
import AuthForm from '../AuthForm/AuthForm';

const SignUpForm: FC<SignUpFormProps> = ({ isLoading, signInLink, errorMessage, onSignUp }) => {
  const { getInputProps, handleSubmit } = useForm<CreateUserDto>({
    initForm: { email: '', password: '' },
    Resolver: CreateUserDto,
  });

  return (
    <AuthForm onSubmit={handleSubmit(onSignUp)} isLoading={isLoading} errorMessage={errorMessage}>
      <TextField {...getInputProps('email')} autoFocus type="email" label="Email" />
      <TextField {...getInputProps('password')} type="password" label="Password" />

      <Button fullWidth label="Sign Up" type="submit" />

      <Typography centerAlign variant="bodyXS">
        Already have an account? <Link to={signInLink}>Sign In</Link>
      </Typography>
    </AuthForm>
  );
};

export default SignUpForm;

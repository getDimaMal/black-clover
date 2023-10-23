import React, { FC } from 'react';
import { SignInFormProps } from '@black-clover/front/shared/types/auth.type';
import { CreateUserDto } from '@black-clover/shared/dto/users/create-user.dto';

import useForm from '../../../../hooks/useForm';
import Button from '../../../atoms/Buttons/Button/Button';
import Link from '../../../atoms/Buttons/Link/Link';
import TextField from '../../../atoms/Inputs/TextField/TextField';
import Typography from '../../../atoms/Typography/Typography';
import AuthForm from '../AuthForm/AuthForm';

import useStyles from './SignInForm.styles';

const SignInForm: FC<SignInFormProps> = ({ isLoading, resetPasswordLink, errorMessage, onSignUp, onSignIn }) => {
  const { classes } = useStyles();
  const { getInputProps, handleSubmit } = useForm<CreateUserDto>({
    initForm: { email: '', password: '' },
    Resolver: CreateUserDto,
  });

  return (
    <AuthForm onSubmit={handleSubmit(onSignIn)} isLoading={isLoading} errorMessage={errorMessage}>
      <TextField {...getInputProps('email')} autoFocus type="email" label="Email" />
      <TextField {...getInputProps('password')} type="password" label="Password" />

      <div className={classes.buttonGroup}>
        <Button fullWidth label="Sign In" type="submit" />
        <Button fullWidth label="Sign Up" variant="outlined" onClick={() => onSignUp()} />
      </div>

      <Typography centerAlign variant="bodyXS">
        Forgot password? <Link to={resetPasswordLink}>Reset</Link>
      </Typography>
    </AuthForm>
  );
};

export default SignInForm;

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

const SignInForm: FC<SignInFormProps> = ({ isLoading, changePasswordLink, errorMessage, onSignUp, onSignIn }) => {
  const { classes } = useStyles();
  const { getInputProps, handleSubmit } = useForm<CreateUserDto>({
    initForm: { email: '', password: '' },
    Resolver: CreateUserDto,
  });

  return (
    <AuthForm handleSubmit={handleSubmit(onSignIn)} isLoading={isLoading} errorMessage={errorMessage}>
      <TextField {...getInputProps('email')} autoFocus type="email" label="Email" />
      <TextField {...getInputProps('password')} type="password" label="Password" />

      <div className={classes.buttonGroup}>
        <Button label="Sign In" type="submit" />
        <Button label="Sign Up" variant="outlined" onClick={() => onSignUp()} />
      </div>

      <Typography variant="bodyXS" className={classes.alignCenter}>
        Forgot password? <Link to={changePasswordLink}>Reset</Link>
      </Typography>
    </AuthForm>
  );
};

export default SignInForm;

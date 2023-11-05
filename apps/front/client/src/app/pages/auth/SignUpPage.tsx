import React from 'react';
import { useAuth } from '@black-clover/front/services/components/auth/AuthContext/AuthContext';
import SignUp from '@black-clover/front/services/components/auth/SignUp/SignUp';
import FieldContainer from '@black-clover/front/services/components/form/FieldContainer';
import Button from '@black-clover/front/ui/components/atoms/Buttons/Button/Button';
import Link from '@black-clover/front/ui/components/atoms/Buttons/Link/Link';
import TextField from '@black-clover/front/ui/components/atoms/Inputs/TextField/TextField';
import Loader from '@black-clover/front/ui/components/atoms/Loader/Loader';
import Alert from '@black-clover/front/ui/components/atoms/Messages/Alert/Alert';
import Typography from '@black-clover/front/ui/components/atoms/Typography/Typography';
import AuthLayout from '@black-clover/front/ui/components/organisms/layouts/AuthLayout/AuthLayout';

import ROUTES from '../routes.json';

const SignInPage = () => {
  const { login } = useAuth();

  return (
    <AuthLayout>
      <SignUp
        onSuccess={login}
        render={({ isLoading, error, ...other }) => (
          <AuthLayout.Form>
            <Loader isLoading={isLoading} />

            <Typography centerAlign variant="h3">
              Sign Up
            </Typography>

            {error && <Alert variant="error" message={error} />}

            <FieldContainer
              {...other}
              name="email"
              render={(props) => <TextField {...props} autoFocus type="email" label="Email" />}
            />

            <FieldContainer
              {...other}
              name="password"
              render={(props) => <TextField {...props} type="password" label="Password" />}
            />

            <Button fullWidth label="Sign Up" type="submit" />

            <Typography centerAlign variant="bodyXS">
              Already have an account? <Link to={ROUTES.SIGN_IN}>Sign In</Link>
            </Typography>
          </AuthLayout.Form>
        )}
      />
    </AuthLayout>
  );
};

export default SignInPage;

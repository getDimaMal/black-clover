import React from 'react';
import { useHistory } from 'react-router-dom';
import SignIn from '@black-clover/front/services/components/auth/SignIn/SignIn';
import SignInForm from '@black-clover/front/ui/components/organisms/auth/SignInForm/SignInForm';
import AuthLayout from '@black-clover/front/ui/components/organisms/layouts/AuthLayout/AuthLayout';

import ROUTES from '../routes.json';

const SignInPage = () => {
  const history = useHistory();

  return (
    <AuthLayout label="Sign In">
      <SignIn changePasswordLink={ROUTES.CHANGE_PASSWORD} onSignUp={() => history.push(ROUTES.SIGN_UP)}>
        {(props) => <SignInForm {...props} />}
      </SignIn>
    </AuthLayout>
  );
};

export default SignInPage;

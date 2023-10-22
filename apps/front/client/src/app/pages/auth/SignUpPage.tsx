import React from 'react';
import SignUp from '@black-clover/front/services/components/auth/SignUp/SignUp';
import SignUpForm from '@black-clover/front/ui/components/organisms/auth/SignUpForm/SignUpForm';
import AuthLayout from '@black-clover/front/ui/components/organisms/layouts/AuthLayout/AuthLayout';

import ROUTES from '../routes.json';

const SignInPage = () => {
  return (
    <AuthLayout label="Sign Up">
      <SignUp signInLink={ROUTES.SIGN_IN}>{(props) => <SignUpForm {...props} />}</SignUp>
    </AuthLayout>
  );
};

export default SignInPage;

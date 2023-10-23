import React from 'react';
import ResetPassword from '@black-clover/front/services/components/auth/ResetPassword/ResetPassword';
import ResetPasswordForm from '@black-clover/front/ui/components/organisms/auth/ResetPasswordForm/ResetPasswordForm';
import AuthLayout from '@black-clover/front/ui/components/organisms/layouts/AuthLayout/AuthLayout';

import ROUTES from '../routes.json';

const ResetPasswordPage = () => {
  return (
    <AuthLayout label="Reset Password">
      <ResetPassword changePasswordLink={ROUTES.CHANGE_PASSWORD}>
        {(props) => <ResetPasswordForm {...props} />}
      </ResetPassword>
    </AuthLayout>
  );
};

export default ResetPasswordPage;

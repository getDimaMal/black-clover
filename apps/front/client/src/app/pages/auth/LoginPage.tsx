import React from 'react';
import Login from '@black-clover/front/services/components/auth/Login/Login';
import LoginForm from '@black-clover/front/ui/components/organisms/auth/LoginForm/LoginForm';

const LoginPage = () => {
  return <Login resetPasswordLink="/login/changePassword">{(props) => <LoginForm {...props} />}</Login>;
};

export default LoginPage;

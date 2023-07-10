import React from 'react';
import Login from '@black-clover/front/services/components/auth/Login/Login';
import LoginForm from '@black-clover/front/ui/compoents/organisms/auth/LoginForm/LoginForm';

const LoginPage = () => {
  return <Login>{(props) => <LoginForm {...props} />}</Login>;
};

export default LoginPage;

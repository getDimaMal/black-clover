import React from 'react';
import LoginForm from '@black-clover/front/services/components/LoginForm/LoginForm';
import { default as LoginFormUI } from '@black-clover/front/ui/compoents/organisms/LoginForm/LoginForm';

const LoginPage = () => {
  return <LoginForm>{(props) => <LoginFormUI {...props} />}</LoginForm>;
};

export default LoginPage;

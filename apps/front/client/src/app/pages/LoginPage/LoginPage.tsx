import React from 'react';
import LoginForm from '@black-clover/front/services/components/LoginForm/LoginForm';
import LoginFormUI from '@black-clover/front/ui/compoents/organisms/auth/LoginFormUI/LoginFormUI';

const LoginPage = () => {
  return <LoginForm>{(props) => <LoginFormUI {...props} />}</LoginForm>;
};

export default LoginPage;

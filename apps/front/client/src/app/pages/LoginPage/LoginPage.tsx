import React from 'react';
import LoginForm from '@black-clover/front/ui/compoents/organisms/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <LoginForm onSignIn={(data) => console.log('SIGN IN:', data)} onSignUp={(data) => console.log('SIGN UP:', data)} />
  );
};

export default LoginPage;

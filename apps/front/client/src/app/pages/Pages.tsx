import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { useAuth } from '@black-clover/front/services/components/auth/AuthContext/AuthContext';

import ChangePasswordPage from './auth/ChangePasswordPage';
import CheckEmailPage from './auth/CheckEmailPage';
import LoginPage from './auth/LoginPage';
import WelcomePage from './WelcomePage/WelcomePage';

const Pages = () => {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <Switch>
        {user ? (
          <>
            <Route exact path="/" component={() => <div>Categories</div>} />
            <Redirect to="/" />
          </>
        ) : (
          <>
            <Route exact path="/" component={WelcomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/login/checkEmail" component={CheckEmailPage} />
            <Route exact path="/login/changePassword" component={ChangePasswordPage} />
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
};

export default Pages;

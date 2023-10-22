import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useAuth } from '@black-clover/front/services/components/auth/AuthContext/AuthContext';
import { Map, Setting } from '@black-clover/front/ui/assets/images';
import Typography from '@black-clover/front/ui/components/atoms/Typography/Typography';
import SidebarLayout from '@black-clover/front/ui/components/organisms/layouts/SidebarLayout/SidebarLayout';

import ChangePasswordPage from './auth/ChangePasswordPage';
import CheckEmailPage from './auth/CheckEmailPage';
import SignInPage from './auth/SignInPage';
import SignUpPage from './auth/SignUpPage';
import WelcomePage from './WelcomePage/WelcomePage';
import ROUTES from './routes.json';

const Pages = () => {
  const { user } = useAuth();
  const history = useHistory();

  return (
    <Switch>
      {user ? (
        <SidebarLayout
          onNavigate={(page) => history.push(page)}
          navigations={[
            [
              {
                icon: Map,
                variant: 'head',
                label: 'Tracking Plan',
                isActive: (path) => ['/events', '/properties', '/', '/groups', '/tags'].includes(String(path)),
              },
              { path: '/', label: 'Categories', variant: 'item' },
              { path: '/properties', label: 'Properties', variant: 'item' },
              { path: '/groups', label: 'Groups', variant: 'item' },
              { path: '/events', label: 'Events', variant: 'item' },
              { path: '/tags', label: 'Tags', variant: 'item' },
            ],
            [
              {
                icon: Setting,
                variant: 'head',
                label: 'Settings',
                isActive: (path) => ['/workspace', '/billing', '/import', '/export', '/switch'].includes(String(path)),
              },
              { path: '/workspace', label: 'Workspace Settings', variant: 'item' },
              { path: '/switch', label: 'Switch Workspace', variant: 'item' },
              { path: '/billing', label: 'Billing', variant: 'item' },
              { path: '/import', label: 'Import', variant: 'item' },
              { path: '/export', label: 'Export', variant: 'item' },
            ],
          ]}
        >
          <Route exact path="/" component={() => <Typography variant="h1">Categories</Typography>} />
          <Route exact path="/properties" component={() => <Typography variant="h1">Properties</Typography>} />
          <Route exact path="/groups" component={() => <Typography variant="h1">Groups</Typography>} />
          <Route exact path="/events" component={() => <Typography variant="h1">Events</Typography>} />
          <Route exact path="/tags" component={() => <Typography variant="h1">Tags</Typography>} />
          <Route exact path="/workspace" component={() => <Typography variant="h1">Workspace Settings</Typography>} />
          <Route exact path="/switch" component={() => <Typography variant="h1">Switch</Typography>} />
          <Route exact path="/billing" component={() => <Typography variant="h1">Billing</Typography>} />
          <Route exact path="/import" component={() => <Typography variant="h1">Import</Typography>} />
          <Route exact path="/export" component={() => <Typography variant="h1">Export</Typography>} />
          {/*<Redirect to="/" />*/}
        </SidebarLayout>
      ) : (
        <>
          <Route exact path="/" component={WelcomePage} />
          <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route exact path={ROUTES.CHECK_EMAIL} component={CheckEmailPage} />
          <Route exact path={ROUTES.CHANGE_PASSWORD} component={ChangePasswordPage} />
        </>
      )}
    </Switch>
  );
};

export default Pages;

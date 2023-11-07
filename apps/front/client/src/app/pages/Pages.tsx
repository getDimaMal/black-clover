import React from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { useAuth } from '@black-clover/front/services/components/auth/AuthProvider/AuthProvider';
import { Logout, Map, Setting } from '@black-clover/front/ui/assets/images';
import Button from '@black-clover/front/ui/components/atoms/Buttons/Button/Button';
import Typography from '@black-clover/front/ui/components/atoms/Typography/Typography';
import SidebarLayout from '@black-clover/front/ui/components/organisms/layouts/SidebarLayout/SidebarLayout';

import ChangePasswordPage from './auth/ChangePasswordPage';
import ResetPasswordPage from './auth/ResetPasswordPage';
import SignInPage from './auth/SignInPage';
import SignUpPage from './auth/SignUpPage';
import EventsPage from './EventsPage/EventsPage';
import WelcomePage from './WelcomePage/WelcomePage';
import WorkspacesPage from './WorkspacesPage/WorkspacesPage';
import ROUTES from './routes.json';

const Pages = () => {
  const { user, logout } = useAuth();
  const history = useHistory();

  return (
    <Switch>
      {user ? (
        <SidebarLayout
          LogoutButton={<Button label="Logout" variant="outlined" onClick={() => logout()} startIcon={Logout} />}
          onNavigate={(page) => history.push(page)}
          navigations={[
            [
              {
                icon: Map,
                variant: 'head',
                label: 'Tracking Plan',
                isActive: (path) => ['/', '/properties', '/categories', '/groups', '/tags'].includes(String(path)),
              },
              { path: '/', label: 'Events', variant: 'item' },
              { path: '/properties', label: 'Properties', variant: 'item' },
              { path: '/categories', label: 'Categories', variant: 'item' },
              { path: '/groups', label: 'Groups', variant: 'item' },
              { path: '/tags', label: 'Tags', variant: 'item' },
            ],
            [
              {
                icon: Setting,
                variant: 'head',
                label: 'Settings',
                isActive: (path) => ['/workspace', '/billing', '/import', '/export', '/switch'].includes(String(path)),
              },
              { path: '/settings', label: 'Workspace Settings', variant: 'item' },
              { path: '/switch', label: 'Switch Workspace', variant: 'item' },
              { path: '/billing', label: 'Billing', variant: 'item' },
              { path: '/import', label: 'Import', variant: 'item' },
              { path: '/export', label: 'Export', variant: 'item' },
            ],
          ]}
        >
          <Route exact path="/" component={EventsPage} />
          <Route exact path="/switch" component={WorkspacesPage} />
          <Route exact path="/properties" component={() => <Typography variant="h1">Properties</Typography>} />
          <Route exact path="/groups" component={() => <Typography variant="h1">Groups</Typography>} />
          <Route exact path="/events" component={() => <Typography variant="h1">Events</Typography>} />
          <Route exact path="/tags" component={() => <Typography variant="h1">Tags</Typography>} />
          <Route exact path="/workspace" component={() => <Typography variant="h1">Workspace Settings</Typography>} />
          <Route exact path="/billing" component={() => <Typography variant="h1">Billing</Typography>} />
          <Route exact path="/import" component={() => <Typography variant="h1">Import</Typography>} />
          <Route exact path="/export" component={() => <Typography variant="h1">Export</Typography>} />
          <Redirect to="/" />
        </SidebarLayout>
      ) : (
        <>
          <Route exact path="/" component={WelcomePage} />
          <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route exact path={ROUTES.RESET_PASSWORD} component={ResetPasswordPage} />
          <Route exact path={ROUTES.CHANGE_PASSWORD + '/:token'} component={ChangePasswordPage} />
          {/*<Redirect to="/" />*/}
        </>
      )}
    </Switch>
  );
};

export default Pages;

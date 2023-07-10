import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import CheckEmailPage from './auth/CheckEmailPage';
import LoginPage from './auth/LoginPage';
import ErrorPage from './ErrorPage/ErrorPage';
import WelcomePage from './WelcomePage/WelcomePage';
import ROUTES from './routes.json';

const Pages = () => {
  const router = createBrowserRouter([
    {
      path: ROUTES.ROOT,
      element: <WelcomePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: ROUTES.LOGIN,
      children: [
        { path: ROUTES.LOGIN, element: <LoginPage /> },
        { path: ROUTES.CHECK_EMAIL, element: <CheckEmailPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Pages;

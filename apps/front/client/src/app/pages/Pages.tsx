import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
      element: <LoginPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Pages;

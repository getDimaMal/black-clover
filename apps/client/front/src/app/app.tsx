import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import ROUTES from './constants/routes.json';
import LoginPage from './pages/login';
import WelcomePage from './pages/welcome';

// TODO get text from localisation
export function App() {
  return (
    <div>
      <div role="navigation">
        <Link to={ROUTES.ROOT}>Home</Link>
        <span> | </span>
        <Link to={ROUTES.LOGIN}>Login</Link>
      </div>

      <Routes>
        <Route path={ROUTES.ROOT} element={<WelcomePage />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import { Login } from './pages/Login/index';

export const App = ({ history }) => {
  return (
    <div className="app">
      <div className="main">
        <Login history={history} />
      </div>
    </div>
  );
};

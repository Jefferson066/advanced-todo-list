import React from 'react';
//import Routes from './routes';
//import { BrowserRouter } from 'react-router-dom';
import { Login } from './pages/Login/index';

export const App = () => {
  return (
    <div className="app">
      <div className="main">
        <Login />
      </div>
    </div>
  );
};

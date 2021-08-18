import React from 'react';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

export const App = () => {
  return (
    <div className="app">
      <div className="main">
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>
    </div>
  );
};

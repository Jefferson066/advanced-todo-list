import React from 'react';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
//import { Meteor } from 'meteor/meteor';
//import { useTracker } from 'meteor/react-meteor-data';
//import { Login } from './pages/Login/index';

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

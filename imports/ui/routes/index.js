import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Register } from '../pages/Register/index';
import { Login } from '../pages/Login/index';
import { Page404 } from '../pages/Page404/index';
import { Logged } from '../pages/Logged';
import { App } from '../App';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/logged">
        <Logged />
      </Route>
      <Route exact path="*">
        <Page404 />
      </Route>
    </Switch>
  );
}

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MyRoute from './MyRoute';
import { Register } from '../pages/Register/index';
import { Page404 } from '../pages/Page404/index';
import { Logged } from '../pages/Logged';
import { App } from '../App';

export default function Routes({ history }) {
  return (
    <Switch>
      <Route exact path="/">
        <App history={history} />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <MyRoute exact path={'/authenticated'}>
        <Logged />
      </MyRoute>
      <Route exact path="*">
        <Page404 />
      </Route>
    </Switch>
  );
}

import { React } from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login/index';
import Register from '../pages/Register/index';
import Page404 from '../pages/Page404/index';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/new">
        <Register />
      </Route>
      <Route exact path="*">
        <Page404 />
      </Route>
    </Switch>
  );
}

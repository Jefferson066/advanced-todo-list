import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MyRoute from './MyRoute';
import { Register } from '../pages/Register/index';
import { Page404 } from '../pages/Page404/index';
import { Welcome } from '../pages/Welcome/index';
import { App } from '../App';
import { TodoList } from '../pages/TodoList';

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
        <Welcome history={history} />
      </MyRoute>
      <MyRoute exact path={'/authenticated/todolist'}>
        <TodoList />
      </MyRoute>
      <Route exact path="*">
        <Page404 />
      </Route>
    </Switch>
  );
}

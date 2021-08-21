import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MyRoute from './MyRoute';
import { Register } from '../pages/Register/index';
import { Page404 } from '../pages/Page404/index';
import { Welcome } from '../pages/Welcome/index';
import { App } from '../App';
import { TodoList } from '../pages/TodoList';
import { NewTask } from '../pages/NewTask';

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
        <TodoList history={history} />
      </MyRoute>
      <MyRoute exact path={'/authenticated/todolist/new'}>
        <NewTask history={history} />
      </MyRoute>
      <Route exact path="*">
        <Page404 />
      </Route>
    </Switch>
  );
}
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { App } from '/imports/ui/App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Register } from '../imports/ui/pages/Register/index';

Meteor.startup(() => {
  render(
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
      </Switch>
    </BrowserRouter>,
    document.getElementById('react-target'),
  );
});

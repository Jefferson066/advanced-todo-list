import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { App } from '/imports/ui/App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { RegisterForm } from '../imports/ui/RegisterForm';

Meteor.startup(() => {
  render(
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/register">
          <RegisterForm />
        </Route>
      </Switch>
    </BrowserRouter>,
    document.getElementById('react-target'),
  );
});

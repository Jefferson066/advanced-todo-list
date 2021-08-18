import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Routes from '../imports/ui/routes';

Meteor.startup(() => {
  const history = createBrowserHistory();
  render(
    <Router history={history}>
      <Routes history={history} />
    </Router>,
    document.getElementById('react-target'),
  );
});

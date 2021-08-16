import React, { Fragment } from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { LoginForm } from './LoginForm.jsx';

export const App = () => {
  const user = useTracker(() => Meteor.user());
  const logout = () => Meteor.logout();
  return (
    <div className="app">
      <div className="main">
        {user ? (
          <Fragment>
            <h1>{user.username}</h1>
            <div className="logout">
              <button onClick={logout}>Logout</button>
            </div>
          </Fragment>
        ) : (
          <LoginForm />
        )}
      </div>
    </div>
  );
};

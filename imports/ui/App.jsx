import React, { Fragment } from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Login } from './pages/Login/index';

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
          <Login />
        )}
      </div>
    </div>
  );
};

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';

export const Logged = () => {
  const user = useTracker(() => Meteor.user());
  const logout = () => Meteor.logout();
  return (
    <div className="app">
      <div className="main">
        <h1>{user.username}</h1>
        <div className="logout!">
          <button onClick={logout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

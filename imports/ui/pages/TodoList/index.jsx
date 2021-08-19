import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';

// eslint-disable-next-line no-unused-vars
export const TodoList = ({ history }) => {
  const user = useTracker(() => Meteor.user());
  const logout = () => Meteor.logout();

  return (
    <div className="app">
      <div className="logout">
        <button className="btn" onClick={logout}>
          Logout
        </button>
      </div>
      <div className="main">
        <h2>Todo list {user.username}!</h2>
      </div>
    </div>
  );
};

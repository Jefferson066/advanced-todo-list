import React from 'react';
import { TaskForm } from '../../components/TaskForm/index';
import { useTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

export const NewTask = () => {
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
        <TaskForm username={user.username} />
      </div>
    </div>
  );
};

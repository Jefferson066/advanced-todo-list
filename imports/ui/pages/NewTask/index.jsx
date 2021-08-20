import React from 'react';
import { TaskForm } from '../../components/TaskForm/index';
import { useTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import { BtnLogout } from '../../components/BtnLogout';

export const NewTask = () => {
  const user = useTracker(() => Meteor.user());
  return (
    <div className="app">
      <div className="logout">
        <BtnLogout />
      </div>
      <div className="main">
        <TaskForm username={user.username} />
      </div>
    </div>
  );
};

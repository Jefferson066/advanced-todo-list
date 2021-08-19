import React from 'react';
import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '../../../api/database/TasksCollection';
import { useTracker } from 'meteor/react-meteor-data';
import { Task } from '../../components/Tasks';
import { TaskForm } from '../../components/TaskForm';

// eslint-disable-next-line no-unused-vars
export const TodoList = ({ history }) => {
  const user = useTracker(() => Meteor.user());
  const tasks = useTracker(() => TasksCollection.find({}, { sort: { createdAt: -1 } }).fetch());
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
        <TaskForm />
        <ul>
          {tasks.map((task) => (
            <Task key={task._id} task={task} userId={task.userId} />
          ))}
        </ul>
      </div>
    </div>
  );
};

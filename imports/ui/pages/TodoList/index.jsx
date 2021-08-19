import React from 'react';
import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '../../../api/database/TasksCollection';
import { useTracker } from 'meteor/react-meteor-data';
import { Task } from '../../components/Tasks';

const URL_PATHS = {
  NEWTASK: '/authenticated/todolist/new',
};
// eslint-disable-next-line no-unused-vars
export const TodoList = ({ history }) => {
  const user = useTracker(() => Meteor.user());
  const tasks = useTracker(() => TasksCollection.find({}, { sort: { createdAt: -1 } }).fetch());
  const logout = () => Meteor.logout();

  const handleAddTaskClick = (e) => {
    e.preventDefault();
    history.push(URL_PATHS.NEWTASK);
  };

  return (
    <div className="app">
      <div className="logout">
        <button className="btn" onClick={logout}>
          Logout
        </button>
      </div>
      <div className="main">
        <h2>Todo list {user.username}!</h2>
        <div>
          <button onClick={handleAddTaskClick} className="btn">
            Adicionar Tarefa!
          </button>
        </div>
        <ul>
          {tasks.map((task) => (
            <Task key={task._id} task={task} />
          ))}
        </ul>
      </div>
    </div>
  );
};

/*
 <div>
        <button className="btn">Adicionar Tarefa</button>

        </div>
*/

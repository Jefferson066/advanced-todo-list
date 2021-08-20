import React from 'react';
import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '../../../api/database/TasksCollection';
import { useTracker } from 'meteor/react-meteor-data';
//import { Task } from '../../components/Tasks';
import { List, ListItem, ListItemText } from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AssignmentIcon from '@material-ui/icons/Assignment';

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
        <List>
          {tasks.map((task) => (
            <ListItem button key={task._id}>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary={task.name} secondary={task.username} />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};
//<ListItem key={task._id} task={task} />
// <ListItem key={task._id} task={task} />

/*
{tasks.map((task) => (
            <ListItem key={task._id} task={task} />
          ))}
*/

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '../../../api/database/TasksCollection';
import { useTracker } from 'meteor/react-meteor-data';
import { List, ListItem, ListItemText } from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const URL_PATHS = {
  NEWTASK: '/authenticated/todolist/new',
};
// eslint-disable-next-line no-unused-vars
export const TodoList = ({ history }) => {
  // eslint-disable-next-line no-unused-vars
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
        <Button variant="contained" color="primary" onClick={logout}>
          Logout
        </Button>
      </div>
      <div className="main">
        <Typography variant="h4" align="center">
          Todo list!
        </Typography>
        <Container maxWidth="sm">
          <div>
            <Button variant="contained" color="primary" onClick={handleAddTaskClick}>
              Adicionar Tarefa!
            </Button>
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
        </Container>
      </div>
    </div>
  );
};

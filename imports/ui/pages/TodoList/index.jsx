import React from 'react';
import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '../../../api/database/TasksCollection';
import { useTracker } from 'meteor/react-meteor-data';

import { BtnLogout } from '../../components/BtnLogout';

import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { Container, Button, Typography } from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';

const URL_PATHS = {
  NEWTASK: '/authenticated/todolist/new',
};

export const TodoList = ({ history }) => {
  // eslint-disable-next-line no-unused-vars
  const user = useTracker(() => Meteor.user());
  const tasks = useTracker(() => TasksCollection.find({}, { sort: { createdAt: -1 } }).fetch());

  const handleAddTaskClick = (e) => {
    e.preventDefault();
    history.push(URL_PATHS.NEWTASK);
  };

  return (
    <div className="app">
      <div className="logout">
        <BtnLogout />
      </div>
      <div className="main">
        <Typography variant="h4" align="center">
          Todo list
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

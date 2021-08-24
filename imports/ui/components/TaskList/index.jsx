import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Box } from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';

export const TaskList = ({ tasks, onDeleteClick }) => (
  <Box component="div" my={2} overflow="hidden" bgcolor="background.paper">
    <List>
      {tasks.map((task) => (
        <ListItem button key={task._id}>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary={task.name} secondary={task.username} />
          <ListItemIcon onClick={() => alert('editando')}>
            <Edit />
          </ListItemIcon>
          <ListItemIcon onClick={(e) => onDeleteClick(e, task)}>
            <Delete />
          </ListItemIcon>
        </ListItem>
      ))}
    </List>
  </Box>
);

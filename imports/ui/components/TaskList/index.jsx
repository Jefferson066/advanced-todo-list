import React, { Fragment } from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Box, Divider } from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';

export const TaskList = ({ tasks, onDeleteClick, onEditClick }) => (
  <Box component="div" my={2} overflow="hidden" bgcolor="background.paper">
    <List>
      {tasks.map((task) => (
        <Fragment key={task._id}>
          <ListItem button>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary={task.name} secondary={task.username} />
            <ListItemIcon onClick={(e) => onEditClick(e, task)}>
              <Edit />
            </ListItemIcon>
            <ListItemIcon onClick={(e) => onDeleteClick(e, task)}>
              <Delete />
            </ListItemIcon>
          </ListItem>
          <Divider />
        </Fragment>
      ))}
    </List>
  </Box>
);

import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: 230,
    marginRight: 20,
  },
});

export const BtnAddTask = ({ handleAddTaskClick }) => {
  const classes = useStyles();
  return (
    <Button
      variant={'contained'}
      color={'primary'}
      onClick={handleAddTaskClick}
      className={classes.root}
    >
      Adicionar Tarefa
    </Button>
  );
};

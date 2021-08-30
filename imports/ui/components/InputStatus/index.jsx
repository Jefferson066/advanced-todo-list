import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '35ch',
    },
  },
}));

export const InputStatus = ({ handleStatusChange, viewStatus }) => {
  const classes = useStyles();
  return (
    <TextField
      select
      className={classes.root}
      label="Selecione o status"
      onChange={handleStatusChange}
      value={viewStatus}
      variant="outlined"
    >
      {viewStatus == 'cadastrada' && <MenuItem value={'cadastrada'}>Cadastrada</MenuItem>}
      {viewStatus == 'cadastrada' && <MenuItem value={'andamento'}>Andamento</MenuItem>}
      {viewStatus == 'andamento' && <MenuItem value={'andamento'}>Andamento</MenuItem>}
      {viewStatus == 'andamento' && <MenuItem value={'concluida'}>Concluída</MenuItem>}
      {viewStatus == 'concluida' && <MenuItem value={'concluida'}>Concluída</MenuItem>}
      {viewStatus == 'concluida' && <MenuItem value={'cadastrada'}>Cadastrada</MenuItem>}
    </TextField>
  );
};

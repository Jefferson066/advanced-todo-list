import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { MenuItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '35ch',
    },
  },
}));

export const InputPublic = ({ handlePrivateChange, value }) => {
  const classes = useStyles();
  return (
    <TextField
      id="outlined-select-currency"
      select
      className={classes.root}
      onChange={handlePrivateChange}
      value={value}
      label="Selecione Pública/Pessoal"
      variant="outlined"
    >
      <MenuItem value={'publica'}>Pública</MenuItem>
      <MenuItem value={'pessoal'}>Pessoal</MenuItem>
    </TextField>
  );
};

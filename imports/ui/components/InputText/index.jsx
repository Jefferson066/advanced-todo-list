import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '35ch',
    },
  },
}));

export const InputText = ({ name, label, setText, value }) => {
  const classes = useStyles();
  return (
    <TextField
      required
      className={classes.root}
      type="text"
      value={value}
      name={name}
      onChange={(e) => setText(e.target.value)}
      label={label}
      variant="outlined"
    />
  );
};

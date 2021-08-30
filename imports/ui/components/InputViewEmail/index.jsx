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

export const InputViewEmail = ({ email }) => {
  const classes = useStyles();
  return (
    <TextField
      disabled
      variant="outlined"
      name={'email'}
      value={email}
      label="Email"
      className={classes.root}
    />
  );
};

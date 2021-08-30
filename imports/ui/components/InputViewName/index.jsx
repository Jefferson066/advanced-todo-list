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

export const InputViewName = ({ value }) => {
  const classes = useStyles();
  return (
    <TextField
      disabled
      type="text"
      name={'name'}
      className={classes.root}
      value={value}
      label={'Nome'}
      variant="outlined"
    />
  );
};

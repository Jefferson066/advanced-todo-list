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

export const InputViewStatus = ({ value }) => {
  const classes = useStyles();
  return (
    <TextField
      disabled
      className={classes.root}
      type="text"
      name={'situacao'}
      value={value}
      label={'Situação'}
      variant="outlined"
    />
  );
};

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

export const InputName = ({ name, setName, label, value }) => {
  const classes = useStyles();
  return (
    <TextField
      required
      className={classes.root}
      type="text"
      name={name}
      value={value}
      onChange={(e) => setName(e.target.value)}
      label={label}
      variant="outlined"
    />
  );
};

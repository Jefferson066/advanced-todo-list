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

export const InputPassword = ({ name, setPassword, label, value }) => {
  const classes = useStyles();
  return (
    <TextField
      required
      type="password"
      className={classes.root}
      name={name}
      value={value}
      onChange={(e) => setPassword(e.target.value)}
      label={label}
      variant="outlined"
    />
  );
};

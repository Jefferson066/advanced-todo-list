import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: 130,
    marginRight: 20,
    marginLeft: 10,
  },
});

export const Btn = ({ textValue, event = null, color = 'primary', variant = 'contained' }) => {
  const classes = useStyles();
  return (
    <Button variant={variant} color={color} onClick={event} className={classes.root}>
      {textValue}
    </Button>
  );
};

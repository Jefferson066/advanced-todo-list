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

export const BtnPagination = ({ text, event }) => {
  const classes = useStyles();
  return (
    <Button variant="contained" color="primary" onClick={event} className={classes.root}>
      {text}
    </Button>
  );
};

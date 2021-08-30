import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: 130,
    marginRight: 10,
  },
});

export const BtnSubmit = ({ textValue, color = 'primary', variant = 'contained' }) => {
  const classes = useStyles();
  return (
    <Button variant={variant} color={color} type="submit" className={classes.root}>
      {textValue}
    </Button>
  );
};

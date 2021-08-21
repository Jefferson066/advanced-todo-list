import React from 'react';
import Button from '@material-ui/core/Button';

export const BtnSubmit = ({ textValue }) => (
  <Button variant="contained" color="primary" type="submit">
    {textValue}
  </Button>
);

import React from 'react';
import Button from '@material-ui/core/Button';

export const Btn = ({ textValue, event = null, color = 'primary', variant = 'contained' }) => (
  <Button variant={variant} color={color} onClick={event}>
    {textValue}
  </Button>
);

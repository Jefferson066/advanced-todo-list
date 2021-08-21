import React from 'react';
import Button from '@material-ui/core/Button';

export const BtnSubmit = ({ textValue, color = 'primary', variant = 'contained' }) => (
  <Button variant={variant} color={color} type="submit">
    {textValue}
  </Button>
);

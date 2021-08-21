import React from 'react';
import { Typography } from '@material-ui/core';

export const MyTypography = ({ textValue, variant, align = 'center' }) => (
  <Typography variant={variant} align={align}>
    {textValue}
  </Typography>
);

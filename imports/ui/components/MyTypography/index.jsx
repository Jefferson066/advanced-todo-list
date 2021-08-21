import React from 'react';
import { Typography } from '@material-ui/core';

export const MyTypography = ({ textValue, variant }) => (
  <Typography variant={variant} align="center">
    {textValue}
  </Typography>
);

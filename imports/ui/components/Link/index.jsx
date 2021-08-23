import React from 'react';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';

export const LinkComponent = ({ textValue, to }) => (
  <Link component={RouterLink} to={to}>
    {textValue}
  </Link>
);

import React from 'react';
import { Meteor } from 'meteor/meteor';
import Button from '@material-ui/core/Button';

const logout = () => Meteor.logout();

export const BtnLogout = ({ color = 'primary', variant = 'contained' }) => (
  <Button variant={variant} color={color} onClick={logout}>
    Logout
  </Button>
);

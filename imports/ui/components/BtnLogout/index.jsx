import React from 'react';
import { Meteor } from 'meteor/meteor';
import Button from '@material-ui/core/Button';

const logout = () => Meteor.logout();

export const BtnLogout = () => (
  <Button variant="contained" color="primary" onClick={logout}>
    Logout
  </Button>
);

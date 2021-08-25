import React from 'react';
import TextField from '@material-ui/core/TextField';

export const InputViewName = ({ value }) => (
  <TextField disabled type="text" name={'name'} value={value} label={'Nome'} variant="outlined" />
);

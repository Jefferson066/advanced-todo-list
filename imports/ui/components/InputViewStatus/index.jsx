import React from 'react';
import TextField from '@material-ui/core/TextField';

export const InputViewStatus = ({ value }) => (
  <TextField
    disabled
    type="text"
    name={'situacao'}
    value={value}
    label={'Situação'}
    variant="outlined"
  />
);

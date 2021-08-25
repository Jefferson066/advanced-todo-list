import React from 'react';
import TextField from '@material-ui/core/TextField';

export const InputViewData = ({ value }) => (
  <TextField
    disabled
    label="Data"
    value={value}
    variant="outlined"
    type="datetime-local"
    InputLabelProps={{
      shrink: true,
    }}
  />
);

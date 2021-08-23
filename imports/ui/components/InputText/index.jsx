import React from 'react';
import TextField from '@material-ui/core/TextField';

export const InputText = ({ name, label, setText }) => (
  <TextField
    required
    type="text"
    name={name}
    onChange={(e) => setText(e.target.value)}
    label={label}
    variant="outlined"
  />
);

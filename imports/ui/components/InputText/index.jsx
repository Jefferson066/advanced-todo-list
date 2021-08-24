import React from 'react';
import TextField from '@material-ui/core/TextField';

export const InputText = ({ name, label, setText, value }) => (
  <TextField
    required
    type="text"
    value={value}
    name={name}
    onChange={(e) => setText(e.target.value)}
    label={label}
    variant="outlined"
  />
);

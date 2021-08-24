import React from 'react';
import TextField from '@material-ui/core/TextField';

export const InputName = ({ name, setName, label, value }) => (
  <TextField
    required
    type="text"
    name={name}
    value={value}
    onChange={(e) => setName(e.target.value)}
    label={label}
    variant="outlined"
  />
);

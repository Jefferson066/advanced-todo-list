import React from 'react';
import TextField from '@material-ui/core/TextField';

export const InputPassword = ({ name, setPassword, label, value }) => (
  <TextField
    required
    type="password"
    name={name}
    value={value}
    onChange={(e) => setPassword(e.target.value)}
    label={label}
    variant="outlined"
  />
);

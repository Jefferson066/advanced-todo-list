import React from 'react';
import TextField from '@material-ui/core/TextField';

export const InputPassword = ({ name, setPassword, label }) => (
  <TextField
    required
    type="password"
    name={name}
    onChange={(e) => setPassword(e.target.value)}
    label={label}
    variant="outlined"
  />
);

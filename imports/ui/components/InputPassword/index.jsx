import React from 'react';
import TextField from '@material-ui/core/TextField';

export const InputPassword = ({ password, setPassword, label }) => (
  <TextField
    required
    type="password"
    name="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    label={label}
    variant="outlined"
  />
);

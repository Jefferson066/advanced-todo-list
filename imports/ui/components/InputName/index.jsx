import React from 'react';
import TextField from '@material-ui/core/TextField';

export const InputName = ({ name, setName, label }) => (
  <TextField
    required
    type="text"
    value={name}
    onChange={(e) => setName(e.target.value)}
    label={label}
    variant="outlined"
  />
);

import React from 'react';
import TextField from '@material-ui/core/TextField';

export const InputName = ({ name, setName }) => (
  <TextField
    required
    type="text"
    value={name}
    onChange={(e) => setName(e.target.value)}
    id="outlined-basic"
    label="Nome"
    variant="outlined"
  />
);

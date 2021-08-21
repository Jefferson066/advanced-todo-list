import React from 'react';
import TextField from '@material-ui/core/TextField';

export const InputData = ({ setData }) => (
  <TextField
    required
    id="datetime-local"
    label="Data"
    variant="outlined"
    type="datetime-local"
    onChange={(e) => setData(e.target.value)}
    InputLabelProps={{
      shrink: true,
    }}
  />
);

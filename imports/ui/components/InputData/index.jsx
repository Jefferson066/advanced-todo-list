import React from 'react';
import TextField from '@material-ui/core/TextField';

export const InputData = ({ setData, value }) => (
  <TextField
    required
    label="Data"
    value={value}
    variant="outlined"
    type="datetime-local"
    onChange={(e) => setData(e.target.value)}
    InputLabelProps={{
      shrink: true,
    }}
  />
);

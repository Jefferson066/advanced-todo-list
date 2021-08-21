import React from 'react';
import TextField from '@material-ui/core/TextField';

export const InputText = ({ text, setText }) => (
  <TextField
    required
    type="text"
    value={text}
    onChange={(e) => setText(e.target.value)}
    id="outlined-basic"
    label="Descrição"
    variant="outlined"
  />
);

import React from 'react';
import TextField from '@material-ui/core/TextField';

export const InputViewText = ({ value }) => (
  <TextField
    disabled
    type="text"
    name={'description'}
    value={value}
    label={'Descrição'}
    variant="outlined"
  />
);

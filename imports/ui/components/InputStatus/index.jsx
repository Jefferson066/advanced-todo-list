import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const currencies = [
  {
    value: 'cadastrada',
    label: 'Cadastrada',
  },
  {
    value: 'andamento',
    label: 'Em Andamento',
  },
  {
    value: 'concluida',
    label: 'Concluída',
  },
];

export const InputStatus = ({ handleStatusChange, viewStatus }) => (
  <TextField
    id="outlined-select-currency"
    select
    label="Select1"
    onChange={handleStatusChange}
    value={viewStatus}
    helperText="Selecione o status da tarefa!"
    variant="outlined"
  >
    {currencies.map((option) => (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
    ))}
  </TextField>
);

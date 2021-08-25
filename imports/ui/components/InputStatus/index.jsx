import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
/*
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
  },                      MOSTRA O ATUAL E O PROXIMO!!!!!!!!!!!!!!!!!!
];*/

export const InputStatus = ({ handleStatusChange, viewStatus }) => (
  <TextField
    id="outlined-select-currency"
    select
    label="Select"
    onChange={handleStatusChange}
    value={viewStatus}
    helperText="Selecione o status da tarefa!"
    variant="outlined"
  >
    <MenuItem value={'cadastrada'}>Cadastrada</MenuItem>
    <MenuItem value={'andamento'}>Andamento</MenuItem>
    <MenuItem value={'concluida'}>Concluída</MenuItem>
  </TextField>
);

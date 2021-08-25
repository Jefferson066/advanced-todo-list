import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

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
    {viewStatus == 'cadastrada' && <MenuItem value={'cadastrada'}>Cadastrada</MenuItem>}
    {viewStatus == 'cadastrada' && <MenuItem value={'andamento'}>Andamento</MenuItem>}
    {viewStatus == 'andamento' && <MenuItem value={'andamento'}>Andamento</MenuItem>}
    {viewStatus == 'andamento' && <MenuItem value={'concluida'}>Concluída</MenuItem>}
    {viewStatus == 'concluida' && <MenuItem value={'concluida'}>Concluída</MenuItem>}
    {viewStatus == 'concluida' && <MenuItem value={'cadastrada'}>Cadastrada</MenuItem>}
  </TextField>
);

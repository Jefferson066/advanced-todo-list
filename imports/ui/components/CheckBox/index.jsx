import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export function MyCheckbox({ state, handleChangecompleted }) {
  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox
            checked={state}
            onChange={handleChangecompleted}
            name="checkedB"
            color="primary"
          />
        }
        label="Mostrar apenas concluídas"
      />
    </FormGroup>
  );
}

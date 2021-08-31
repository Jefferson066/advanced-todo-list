import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { MyTypography } from '../MyTypography';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 130,
    marginLeft: 40,
  },
});

export const ChangetStatus = ({ handleStatusChange, viewStatus }) => {
  const classes = useStyles();
  return (
    <div className={'alterar-situacao'}>
      <MyTypography variant={'h6'} textValue={'Alterar para:'} />
      {viewStatus == 'cadastrada' && (
        <Button
          className={classes.root}
          variant="contained"
          color="primary"
          onClick={(e) => handleStatusChange(e, 'andamento')}
        >
          Andamento
        </Button>
      )}
      {viewStatus == 'andamento' && (
        <Button
          className={classes.root}
          variant="contained"
          color="primary"
          onClick={(e) => handleStatusChange(e, 'concluida')}
        >
          Concluída
        </Button>
      )}
      {viewStatus == 'concluida' && (
        <Button
          className={classes.root}
          variant="contained"
          color="primary"
          onClick={(e) => handleStatusChange(e, 'cadastrada')}
        >
          Cadastrada
        </Button>
      )}
    </div>
  );
};

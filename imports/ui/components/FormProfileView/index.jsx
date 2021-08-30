import { Container, TextField } from '@material-ui/core';
import React from 'react';
import { Btn } from '../Btn';
import { InputViewData } from '../InputViewData';
import { InputViewEmail } from '../InputViewEmail';
import { InputViewName } from '../InputViewName';
import { MyTypography } from '../MyTypography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '35ch',
    },
  },
}));

export const FormProfileView = ({
  handleSubmit,
  email,
  birthDate,
  sex,
  company,
  name,
  handleBackClick,
  handleEditClick,
}) => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <form className="task-form" onSubmit={handleSubmit}>
        <MyTypography variant={'h4'} textValue={'Dados do usuario'} />
        <div className="input">
          <InputViewName name={'name'} value={name} label={'Nome'} />
        </div>
        <div>
          <InputViewEmail email={email} />
        </div>
        <div>
          <InputViewData value={birthDate} />
        </div>
        <div>
          <TextField
            className={classes.root}
            disabled
            variant="outlined"
            name={'sex'}
            value={sex}
            label="Sexo"
          />
        </div>
        <div>
          <TextField
            disabled
            className={classes.root}
            variant="outlined"
            name={'company'}
            value={company}
            label="Empresa"
          />
        </div>
        <div className="btn">
          <Btn textValue={'Voltar'} event={handleBackClick} />
          <Btn textValue={'Editar'} event={handleEditClick} />
        </div>
      </form>
    </Container>
  );
};

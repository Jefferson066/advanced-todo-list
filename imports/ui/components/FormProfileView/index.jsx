import { Container, TextField } from '@material-ui/core';
import React from 'react';
import { Btn } from '../Btn';
import { InputViewData } from '../InputViewData';
import { InputViewName } from '../InputViewName';
import { MyTypography } from '../MyTypography';

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
  return (
    <Container maxWidth="sm">
      <form className="task-form" onSubmit={handleSubmit}>
        <MyTypography variant={'h4'} textValue={'Dados do usuario'} />
        <div className="input"></div>
        <div className="input">
          <InputViewName name={'name'} value={name} label={'Nome'} />
        </div>
        <div className="input">
          <TextField disabled variant="outlined" name={'email'} value={email} label="Email" />
        </div>
        <div className="input">
          <InputViewData value={birthDate} />
        </div>
        <div className="input">
          <TextField disabled variant="outlined" name={'sex'} value={sex} label="Sexo" />
        </div>
        <div className="input">
          <TextField disabled variant="outlined" name={'company'} value={company} label="Empresa" />
        </div>
        <div className="center btn">
          <Btn textValue={'Voltar'} event={handleBackClick} />
          <Btn textValue={'Editar'} event={handleEditClick} />
        </div>
      </form>
    </Container>
  );
};

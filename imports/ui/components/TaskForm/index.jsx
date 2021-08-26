import React from 'react';
import { Container } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { InputName } from '../InputName';
import { InputText } from '../InputText';
import { InputData } from '../InputData';
import { BtnSubmit } from '../BtnSubmit';
import { MyTypography } from '../MyTypography';
import { Btn } from '../Btn';

export const TaskForm = ({
  handleSubmit,
  handlePrivateChange,
  handleBackClick,
  msg,
  name,
  text,
  data,
  isPrivate,
  setName,
  setText,
  setData,
}) => {
  return (
    <Container maxWidth="sm">
      <form className="task-form" onSubmit={handleSubmit}>
        <MyTypography variant={'h4'} textValue={'Adicionar Tarefa'} />
        {msg && (
          <div className="msg-success">
            <MyTypography variant={'h5'} textValue={msg} />
          </div>
        )}
        <div className="input">
          <InputName name={'name'} value={name} label={'Nome'} setName={setName} />
        </div>
        <div className="input">
          <InputText name={'description'} value={text} label="Descrição" setText={setText} />
        </div>
        <div className="input">
          <InputData value={data} setData={setData} />
        </div>
        <div className="input">
          <TextField
            id="outlined-select-currency"
            select
            onChange={handlePrivateChange}
            value={isPrivate}
            label="Selecione"
            helperText="Selecione se a tarefa é Pública/Pessoal"
            variant="outlined"
          >
            <MenuItem value={'publica'}>Pública</MenuItem>
            <MenuItem value={'pessoal'}>Pessoal</MenuItem>
          </TextField>
        </div>
        <div className="btn">
          <BtnSubmit textValue={'Adicionar'} />
        </div>
        <div className="btn">
          <Btn textValue={'Voltar'} event={handleBackClick} />
        </div>
      </form>
    </Container>
  );
};

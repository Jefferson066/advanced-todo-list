import React from 'react';
import { Container } from '@material-ui/core';
import { InputName } from '../InputName';
import { InputText } from '../InputText';
import { InputData } from '../InputData';
import { BtnSubmit } from '../BtnSubmit';
import { MyTypography } from '../MyTypography';
import { Btn } from '../Btn';
import { InputPublic } from '../InputPublic';

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
        <div>
          <InputText name={'description'} value={text} label="Descrição" setText={setText} />
        </div>
        <div>
          <InputData value={data} setData={setData} />
        </div>
        <div>
          <InputPublic handlePrivateChange={handlePrivateChange} value={isPrivate} />
        </div>
        <div className="btn">
          <Btn textValue={'Voltar'} event={handleBackClick} />
          <BtnSubmit textValue={'Adicionar'} />
        </div>
      </form>
    </Container>
  );
};

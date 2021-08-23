import React from 'react';
import { Container } from '@material-ui/core';
import { InputName } from '../InputName';
import { InputText } from '../InputText';
import { InputData } from '../InputData';
import { BtnSubmit } from '../BtnSubmit';
import { MyTypography } from '../MyTypography';
import { Btn } from '../Btn';

export const TaskForm = ({ handleSubmit, handleBackClick, msg, setName, setText, setData }) => {
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
          <InputName name={'name'} label={'Nome'} setName={setName} />
        </div>
        <div className="input">
          <InputText name={'description'} label="Descrição" setText={setText} />
        </div>
        <div className="input">
          <InputData setData={setData} />
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

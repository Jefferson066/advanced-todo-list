import React from 'react';
import { Container } from '@material-ui/core';
import { InputName } from '../InputName';
import { InputText } from '../InputText';
import { InputData } from '../InputData';
import { BtnSubmit } from '../BtnSubmit';
import { MyTypography } from '../MyTypography';
import { Btn } from '../Btn';
import { InputStatus } from '../InputStatus';
import { InputPublic } from '../InputPublic';

export const EditTaskForm = ({
  handlePrivateChange,
  handleSubmit,
  handleBackClick,
  handleStatusChange,
  isPrivate,
  msg,
  viewName,
  viewText,
  viewData,
  viewStatus,
  setViewName,
  setViewText,
  setViewData,
}) => {
  return (
    <Container maxWidth="sm">
      <form className="task-form" onSubmit={handleSubmit}>
        <MyTypography variant={'h4'} textValue={'Editar Tarefa'} />
        {msg && (
          <div className="msg-success">
            <MyTypography variant={'h5'} textValue={msg} />
          </div>
        )}
        <div className="input">
          <InputName name={'name'} value={viewName} label={'Nome'} setName={setViewName} />
        </div>
        <div>
          <InputText
            name={'description'}
            value={viewText}
            label="Descrição"
            setText={setViewText}
          />
        </div>
        <div>
          <InputData value={viewData} setData={setViewData} />
        </div>
        <div>
          <InputStatus viewStatus={viewStatus} handleStatusChange={handleStatusChange} />
        </div>
        <div>
          <InputPublic handlePrivateChange={handlePrivateChange} value={isPrivate} />
        </div>
        <div className="center btn">
          <Btn textValue={'Voltar'} event={handleBackClick} />
          <BtnSubmit textValue={'Salvar'} />
        </div>
      </form>
    </Container>
  );
};

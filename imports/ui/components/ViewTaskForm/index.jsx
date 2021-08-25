import React from 'react';
import { Container } from '@material-ui/core';
import { InputName } from '../InputName';
import { InputText } from '../InputText';
import { InputData } from '../InputData';

import { MyTypography } from '../MyTypography';
import { Btn } from '../Btn';

export const ViewTaskForm = ({
  privateTask,
  handleBackClick,
  viewName,
  viewText,
  viewData,
  viewStatus,
  setView,
}) => {
  return (
    <Container maxWidth="sm">
      <form className="task-form">
        <MyTypography variant={'h4'} textValue={'Tarefa'} />
        <div className="input">
          <InputName name={'name'} value={viewName} label={'Nome'} />
        </div>
        <div className="input">
          <InputText name={'description'} value={viewText} label="Descrição" />
        </div>
        <div className="input">
          <InputData value={viewData} />
        </div>
        <div className="input">
          <InputText name={'situacao'} value={viewStatus} label="Situação" />
        </div>
        <div className="center btn">
          <Btn textValue={'Voltar'} event={handleBackClick} />
          {privateTask && <Btn textValue={'Editar'} event={setView} />}
        </div>
      </form>
    </Container>
  );
};

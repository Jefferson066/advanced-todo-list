import React from 'react';
import { Container } from '@material-ui/core';

import { MyTypography } from '../MyTypography';
import { Btn } from '../Btn';
import { InputViewName } from '../InputViewName';
import { InputViewText } from '../InputViewText';
import { InputViewData } from '../InputViewData';
import { InputViewStatus } from '../InputViewStatus';

export const ViewTaskForm = ({
  privateTask,
  isPrivate,
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
          <InputViewName value={viewName} />
        </div>
        <div>
          <InputViewText value={viewText} />
        </div>
        <div>
          <InputViewData value={viewData} />
        </div>
        <div>
          <InputViewStatus value={viewStatus} />
        </div>
        <div>
          <InputViewStatus value={isPrivate} />
        </div>
        <div className="center btn">
          <Btn textValue={'Voltar'} event={handleBackClick} />
          {privateTask && <Btn textValue={'Editar'} event={setView} />}
        </div>
      </form>
    </Container>
  );
};

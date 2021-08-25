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
        <div className="input">
          <InputViewText value={viewText} />
        </div>
        <div className="input">
          <InputViewData value={viewData} />
        </div>
        <div className="input">
          <InputViewStatus value={viewStatus} />
        </div>
        <div className="center btn">
          <Btn textValue={'Voltar'} event={handleBackClick} />
          {privateTask && <Btn textValue={'Editar'} event={setView} />}
        </div>
      </form>
    </Container>
  );
};

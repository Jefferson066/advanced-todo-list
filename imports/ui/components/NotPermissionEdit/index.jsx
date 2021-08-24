import React from 'react';
import { Container } from '@material-ui/core';
import { MyTypography } from '../MyTypography';
import { Btn } from '../Btn';

export const NotPermissionEdit = ({ handleBackClick }) => (
  <Container maxWidth="sm">
    <MyTypography variant={'h4'} textValue={'Voçê não tem permissão para editar essa tarefa!'} />
    <div className="center">
      <div className="btn">
        <Btn textValue={'Voltar'} event={handleBackClick} />
      </div>
    </div>
  </Container>
);

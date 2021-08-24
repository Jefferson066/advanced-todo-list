import React, { Fragment } from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { useParams } from 'react-router-dom';
import { TasksCollection } from '../../../api/database/TasksCollection';

import { BtnLogout } from '../../components/BtnLogout';
import { Btn } from '../../components/Btn';
import { MyTypography } from '../../components/MyTypography';

import { Container } from '@material-ui/core';
import { useState } from 'react';

const URL_PATHS = {
  TODOLIST: '/authenticated/todolist',
};
export const EditTask = ({ history }) => {
  const { _id } = useParams(); // _id da task selecionada na list
  const user = useTracker(() => Meteor.user());
  const task = TasksCollection.findOne({ _id: _id, userId: user._id }); // undefine se nao existir
  /*
  const [viewName, setViewName] = useState('');
  const [viewText, setViewText] = useState('');
  const [viewData, setViewData] = useState('');
  */
  const handleBackClick = (e) => {
    e.preventDefault();
    history.push(URL_PATHS.TODOLIST);
  };

  return (
    <div className="app">
      <div className="logout">
        <BtnLogout />
      </div>
      {!task ? (
        <div className="main">
          <Container maxWidth="sm">
            <MyTypography
              variant={'h4'}
              textValue={'Voçê não tem permissão para editar essa tarefa!'}
            />
            <div className="center">
              <div className="btn">
                <Btn textValue={'Voltar'} event={handleBackClick} />
              </div>
            </div>
          </Container>
        </div>
      ) : (
        <div className="main">
          <Container maxWidth="sm">
            <h1>Tela de edição {_id}</h1>
            <div className="center">
              <div className="btn">
                <Btn textValue={'Voltar'} event={handleBackClick} />
              </div>
            </div>
          </Container>
        </div>
      )}
    </div>
  );
};

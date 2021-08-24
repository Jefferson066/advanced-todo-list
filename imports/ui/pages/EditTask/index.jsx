import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { useParams } from 'react-router-dom';
import { TasksCollection } from '../../../api/database/TasksCollection';
import { useState } from 'react';
import { useEffect } from 'react';

import { BtnLogout } from '../../components/BtnLogout';
import { Btn } from '../../components/Btn';

import { Container } from '@material-ui/core';
import { NotPermissionEdit } from '../../components/NotPermissionEdit';
import { MyTypography } from '../../components/MyTypography';
import { InputName } from '../../components/InputName';
import { InputText } from '../../components/InputText';
import { InputData } from '../../components/InputData';
import { BtnSubmit } from '../../components/BtnSubmit';
import { InputStatus } from '../../components/InputStatus';

const URL_PATHS = {
  TODOLIST: '/authenticated/todolist',
};
export const EditTask = ({ history }) => {
  const { _id } = useParams(); // _id da task selecionada na list
  const user = useTracker(() => Meteor.user());
  const task = TasksCollection.findOne({ _id: _id, userId: user._id });

  const [viewName, setViewName] = useState('');
  const [viewText, setViewText] = useState('');
  const [viewData, setViewData] = useState('');
  const [viewStatus, setViewStatus] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [msg, setMsg] = useState('');

  useEffect(() => {
    setViewName(task.name);
    setViewText(task.text);
    setViewData(task.data);
    setViewStatus(task.status);
  }, [task.name, task.text, task.data, task.status]);

  console.log(viewName, viewText, viewData, viewStatus);

  const handleBackClick = (e) => {
    e.preventDefault();
    history.push(URL_PATHS.TODOLIST);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!viewName || !viewText || !viewData) {
      setMsg('');
      return;
    }

    Meteor.call('tasks.update', _id, viewName, viewText, viewData, viewStatus, user.username);
    setMsg('Tarefa Editada!');
    //setText('');
    //setName('');
    // setData('');
  };

  const handleStatusChange = (e) => {
    setViewStatus(e.target.value);
  };

  return (
    <div className="app">
      <div className="logout">
        <BtnLogout />
      </div>
      {!task ? (
        <div className="main">
          <NotPermissionEdit handleBackClick={handleBackClick} />
        </div>
      ) : (
        <div className="main">
          <Container maxWidth="sm">
            <form className="task-form" onSubmit={handleSubmit}>
              <MyTypography variant={'h4'} textValue={'Adicionar Tarefa'} />
              {msg && (
                <div className="msg-success">
                  <MyTypography variant={'h5'} textValue={msg} />
                </div>
              )}
              <div className="input">
                <InputName name={'name'} value={viewName} label={'Nome'} setName={setViewName} />
              </div>
              <div className="input">
                <InputText
                  name={'description'}
                  value={viewText}
                  label="Descrição"
                  setText={setViewText}
                />
              </div>
              <div className="input">
                <InputData value={viewData} setData={setViewData} />
              </div>
              <div className="input">
                <InputStatus viewStatus={viewStatus} handleStatusChange={handleStatusChange} />
              </div>
              <div className="btn">
                <BtnSubmit textValue={'Editar'} />
              </div>
            </form>
            <div className="center">
              <Btn textValue={'Voltar'} event={handleBackClick} />
            </div>
          </Container>
        </div>
      )}
    </div>
  );
};

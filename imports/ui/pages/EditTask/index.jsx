import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { useParams } from 'react-router-dom';
import { TasksCollection } from '../../../api/database/TasksCollection';
import { useState } from 'react';

import { ViewTaskForm } from '../../components/ViewTaskForm';
import { MyDrawer } from '../../components/Drawer';
import { EditTaskForm } from '../../components/EditTaskForm';

const URL_PATHS = {
  TODOLIST: '/authenticated/todolist',
};
export const EditTask = ({ history }) => {
  const { _id } = useParams(); // _id da task selecionada na list
  const user = useTracker(() => Meteor.user());
  const { privateTask, publicTask } = useTracker(() => {
    Meteor.subscribe('tasks.public-private');
    const privateTask = TasksCollection.findOne({ _id: _id, userId: user._id }); // so o dono pode editar
    const publicTask = TasksCollection.findOne({ _id: _id }); // todos podem visualizar
    return { privateTask, publicTask };
  });

  const [view, setView] = useState(true);
  const [viewName, setViewName] = useState(publicTask.name);
  const [viewText, setViewText] = useState(publicTask.text);
  const [viewData, setViewData] = useState(publicTask.data);
  // eslint-disable-next-line no-unused-vars
  const [viewStatus, setViewStatus] = useState(publicTask.status);
  const [isPrivate, setIsPrivate] = useState(publicTask.private);
  const [msg, setMsg] = useState('');

  const handleSetViewTrue = (e) => {
    e.preventDefault();
    setView(true);
  };

  const handleBackClick = (e) => {
    e.preventDefault();
    history.push(URL_PATHS.TODOLIST);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!viewName || !viewText || !viewData) {
      return;
    }
    try {
      Meteor.call('tasks.update', _id, viewName, viewText, viewData, user.username, isPrivate);
      setMsg('Tarefa Editada');
    } catch (error) {
      console.log(error);
    }
  };

  const handleStatusChange = (e, status) => {
    e.preventDefault();
    Meteor.call('situacao.update', _id, status);
    history.push(URL_PATHS.TODOLIST);
  };

  const handleEditClick = (e) => {
    e.preventDefault();
    setView(false);
  };

  const handlePrivateChange = (e) => {
    setIsPrivate(e.target.value);
  };
  return (
    <div className="app">
      <div className="main">
        <MyDrawer />
        {view ? (
          <ViewTaskForm
            handleBackClick={handleBackClick}
            handleStatusChange={handleStatusChange}
            setView={handleEditClick}
            privateTask={privateTask}
            isPrivate={isPrivate}
            viewName={viewName}
            viewText={viewText}
            viewData={viewData}
            viewStatus={viewStatus}
            setViewName={setViewName}
            setViewText={setViewText}
            setViewData={setViewData}
          />
        ) : (
          <EditTaskForm
            handleSubmit={handleSubmit}
            handlePrivateChange={handlePrivateChange}
            handleSetViewTrue={handleSetViewTrue}
            msg={msg}
            viewName={viewName}
            isPrivate={isPrivate}
            viewText={viewText}
            viewData={viewData}
            viewStatus={viewStatus}
            setViewName={setViewName}
            setViewText={setViewText}
            setViewData={setViewData}
          />
        )}
      </div>
    </div>
  );
};

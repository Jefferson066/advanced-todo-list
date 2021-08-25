import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { useParams } from 'react-router-dom';
import { TasksCollection } from '../../../api/database/TasksCollection';
import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { useEffect } from 'react';

import { BtnLogout } from '../../components/BtnLogout';
import { ViewTaskForm } from '../../components/ViewTaskForm';
// eslint-disable-next-line no-unused-vars
import { BtnSubmit } from '../../components/BtnSubmit';
import { EditTaskForm } from '../../components/EditTaskForm';

const URL_PATHS = {
  TODOLIST: '/authenticated/todolist',
};
export const EditTask = ({ history }) => {
  const { _id } = useParams(); // _id da task selecionada na list
  const user = useTracker(() => Meteor.user());
  const privateTask = useTracker(() => TasksCollection.findOne({ _id: _id, userId: user._id }));
  const publicTask = useTracker(() => TasksCollection.findOne({ _id: _id }));

  const [view, setView] = useState(true);

  const [viewName, setViewName] = useState(publicTask.name);
  const [viewText, setViewText] = useState(publicTask.text);
  const [viewData, setViewData] = useState(publicTask.data);
  const [viewStatus, setViewStatus] = useState(publicTask.status);
  // eslint-disable-next-line no-unused-vars
  const [msg, setMsg] = useState('');

  const handleBackClick = (e) => {
    e.preventDefault();
    history.push(URL_PATHS.TODOLIST);
  };
  // eslint-disable-next-line no-unused-vars
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!viewName || !viewText || !viewData) {
      return;
    }
    Meteor.call('tasks.update', _id, viewName, viewText, viewData, viewStatus, user.username);
    setMsg('Tarefa Editada!');
  };

  const handleStatusChange = (e) => {
    setViewStatus(e.target.value);
  };

  const handleEditClick = (e) => {
    e.preventDefault();
    setView(false);
  };

  return (
    <div className="app">
      <div className="logout">
        <BtnLogout />
      </div>
      <div className="main">
        {view ? (
          <ViewTaskForm
            handleBackClick={handleBackClick}
            handleStatusChange={handleStatusChange}
            privateTask={privateTask}
            setView={handleEditClick}
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
            handleBackClick={handleBackClick}
            handleSubmit={handleSubmit}
            handleStatusChange={handleStatusChange}
            msg={msg}
            viewName={viewName}
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

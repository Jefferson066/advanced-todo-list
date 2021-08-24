import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { useParams } from 'react-router-dom';
import { TasksCollection } from '../../../api/database/TasksCollection';
import { useState } from 'react';
import { useEffect } from 'react';

import { BtnLogout } from '../../components/BtnLogout';
import { NotPermissionEdit } from '../../components/NotPermissionEdit';
import { EditTaskForm } from '../../components/EditTaskForm';

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
  const [msg, setMsg] = useState('');

  useEffect(() => {
    setViewName(task.name);
    setViewText(task.text);
    setViewData(task.data);
    setViewStatus(task.status);
  }, [task.name, task.text, task.data, task.status]);

  const handleBackClick = (e) => {
    e.preventDefault();
    history.push(URL_PATHS.TODOLIST);
  };

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
        </div>
      )}
    </div>
  );
};

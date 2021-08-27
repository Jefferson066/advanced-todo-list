import React, { useState } from 'react';
import { TaskForm } from '../../components/TaskForm/index';
import { useTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import { MyDrawer } from '../../components/Drawer';

const URL_PATHS = {
  TODOLIST: '/authenticated/todolist',
};
export const NewTask = ({ history }) => {
  const user = useTracker(() => Meteor.user());

  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [data, setData] = useState('');
  const [isPrivate, setIsPrivate] = useState('');
  const [msg, setMsg] = useState('');

  const handleBackClick = (e) => {
    e.preventDefault();
    history.push(URL_PATHS.TODOLIST);
  };

  const handlePrivateChange = (e) => {
    setIsPrivate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text || !name || !data) {
      setMsg('');
      return;
    }

    Meteor.call('tasks.insert', name, text, data, user.username, isPrivate);
    setMsg('Tarefa adicionada!');
    setText('');
    setName('');
    setData('');
    setIsPrivate('');
  };

  return (
    <div className="app">
      <div className="main">
        <MyDrawer />
        <TaskForm
          handleBackClick={handleBackClick}
          handleSubmit={handleSubmit}
          handlePrivateChange={handlePrivateChange}
          name={name}
          text={text}
          data={data}
          isPrivate={isPrivate}
          msg={msg}
          setName={setName}
          setText={setText}
          setData={setData}
        />
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { TaskForm } from '../../components/TaskForm/index';
import { useTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import { BtnLogout } from '../../components/BtnLogout';

export const NewTask = () => {
  const user = useTracker(() => Meteor.user());

  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [data, setData] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text && !name && !data) {
      setMsg('');
      return;
    }

    Meteor.call('tasks.insert', name, text, data, user.username);
    setMsg('Tarefa adicionada!');
    setText('');
    setName('');
    setData('');
  };

  return (
    <div className="app">
      <div className="logout">
        <BtnLogout />
      </div>
      <div className="main">
        <TaskForm
          handleSubmit={handleSubmit}
          msg={msg}
          name={name}
          text={text}
          data={data}
          setName={setName}
          setText={setText}
          setData={setData}
        />
      </div>
    </div>
  );
};

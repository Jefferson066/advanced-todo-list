import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';

export const TaskForm = ({ username }) => {
  // eslint-disable-next-line no-unused-vars
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

    Meteor.call('tasks.insert', name, text, data, username);
    setMsg('Tarefa adicionada!');
    setText('');
    setName('');
    setData('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      {msg && (
        <div className="msg-success">
          <h2>{msg} </h2>
        </div>
      )}
      <div>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Descrição"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Data"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
      </div>
      <div>
        <button className="btn" type="submit">
          Adicionar Tarefa!
        </button>
      </div>
    </form>
  );
};

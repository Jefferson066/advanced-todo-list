import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';

export const TaskForm = ({ username }) => {
  // eslint-disable-next-line no-unused-vars
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) return;

    Meteor.call('tasks.insert', text, username);

    setText('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type to add new tasks"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit">Adicionar Tarefa</button>
    </form>
  );
};

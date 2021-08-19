import React from 'react';

export const Task = ({ task, userId }) => {
  return (
    <li>
      {task.text}- criado por {userId}
    </li>
  );
};

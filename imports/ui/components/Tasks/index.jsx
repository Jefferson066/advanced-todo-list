import React from 'react';
//import { Meteor } from 'meteor/meteor';

export const Task = ({ task }) => {
  //Meteor.call('user.find', userId);
  return (
    <li>
      {task.text}- criado por - {task.username}
    </li>
  );
};

import React from 'react';
//import { Meteor } from 'meteor/meteor';

export const Task = ({ task }) => {
  //Meteor.call('user.find', userId);
  return (
    <li>
      Nome-{task.name}, Descrição-{task.text}, data-{task.data}, nome-{task.username}
    </li>
  );
};

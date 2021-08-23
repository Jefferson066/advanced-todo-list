import React from 'react';
import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '../../../api/database/TasksCollection';
import { useTracker } from 'meteor/react-meteor-data';

import { BtnLogout } from '../../components/BtnLogout';
import { MyTypography } from '../../components/MyTypography';
import { Btn } from '../../components/Btn';
import { TaskList } from '../../components/TaskList';

import { Container } from '@material-ui/core';

const URL_PATHS = {
  NEWTASK: '/authenticated/todolist/new',
};

export const TodoList = ({ history }) => {
  // eslint-disable-next-line no-unused-vars
  const user = useTracker(() => Meteor.user());
  const tasks = useTracker(() => TasksCollection.find({}, { sort: { createdAt: -1 } }).fetch());

  const handleAddTaskClick = (e) => {
    e.preventDefault();
    history.push(URL_PATHS.NEWTASK);
  };

  return (
    <div>
      <div className="logout">
        <BtnLogout />
      </div>
      <div className="main">
        <Container maxWidth="sm">
          <MyTypography variant={'h4'} textValue={'Todo List'} />
          <div className="btn">
            <Btn textValue={'Adicionar Tarefa'} event={handleAddTaskClick} />
          </div>
          <TaskList tasks={tasks} />
        </Container>
      </div>
    </div>
  );
};

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '../../../api/database/TasksCollection';
import { useTracker } from 'meteor/react-meteor-data';

import { MyTypography } from '../../components/MyTypography';
import { Btn } from '../../components/Btn';
import { TaskList } from '../../components/TaskList';

import { Container } from '@material-ui/core';
import { MyDrawer } from '../../components/Drawer';

const URL_PATHS = {
  NEWTASK: '/authenticated/todolist/new',
  EDITTASK: '/authenticated/todolist/edit',
};

export const TodoList = ({ history }) => {
  const user = useTracker(() => Meteor.user());

  const { tasks } = useTracker(() => {
    Meteor.subscribe('tasks.private');
    Meteor.subscribe('tasks.public');
    const tasks = TasksCollection.find({}, { sort: { createdAt: -1 } }).fetch();
    return { tasks };
  });

  const handleAddTaskClick = (e) => {
    e.preventDefault();
    history.push(URL_PATHS.NEWTASK);
  };

  const editTaskClick = (e, { _id }) => {
    e.preventDefault();
    history.push(URL_PATHS.EDITTASK + `/${_id}`);
  };

  const deleteTask = (e, { _id }) => {
    e.preventDefault();
    const task = TasksCollection.findOne({ _id: _id, userId: user._id });
    if (task) {
      let msg = confirm('Deseja excluir o item ?');
      if (msg == true) {
        Meteor.call('tasks.remove', _id);
      }
      //remocao
    } else {
      alert('Você não tem permissão para apagar esse item!');
    }
  };

  return (
    <div>
      <div className="app">
        <div className="main">
          <MyDrawer />
          <Container maxWidth="sm">
            <MyTypography variant={'h4'} textValue={'Todo List'} />
            <div className="btn">
              <Btn textValue={'Adicionar Tarefa'} event={handleAddTaskClick} />
            </div>
            <TaskList tasks={tasks} onDeleteClick={deleteTask} onEditClick={editTaskClick} />
          </Container>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { Meteor } from 'meteor/meteor';
import _ from 'lodash';
import { useTracker } from 'meteor/react-meteor-data';
import { MyTypography } from '../../components/MyTypography';
import { MyDrawer } from '../../components/Drawer';
import { TasksCollection } from '../../../api/database/TasksCollection';
import { Container } from '@material-ui/core';
import { SimpleCard } from '../../components/Card';
import { CardButton } from '../../components/CardButton';

/*
const URL_PATHS = {
  TODOLIST: '/authenticated/todolist',
};*/

// eslint-disable-next-line no-unused-vars
export const Welcome = ({ history }) => {
  const user = useTracker(() => Meteor.user());

  const { allTasksUser, allTaskPublic } = useTracker(() => {
    Meteor.subscribe('tasks'); // todas tasks do usuario logado
    Meteor.subscribe('tasks.public'); // todas tasks publicas do banco
    const allTasksUser = TasksCollection.find(
      // todas tasks do usuario logado
      { userId: user._id },
      { sort: { createdAt: -1 } },
    ).fetch();
    const allTaskPublic = TasksCollection.find(
      // todas tasks publicas do banco
      { private: 'publica' },
      { sort: { createdAt: -1 } },
    ).fetch();
    return { allTasksUser, allTaskPublic };
  });

  const allTasks = [...allTasksUser, ...allTaskPublic]; // remover objetos duplicados
  const allTasksFilter = _.uniqBy(allTasks, '_id'); // sem objetos duplicados

  const registeredTasks = allTasksFilter.filter((obj) => obj.status === 'cadastrada');
  const tasksProgress = allTasksFilter.filter((obj) => obj.status === 'andamento');
  const completedTasks = allTasksFilter.filter((obj) => obj.status === 'concluida');

  /*
  const handleClick = (e) => {
    e.preventDefault();
    history.push(URL_PATHS.TODOLIST);
  };
  */

  return (
    <div className="app">
      <div className="main">
        <MyDrawer />
        <Container maxWidth="sm">
          <MyTypography
            variant={'h4'}
            textValue={`Olá ${user.username}, seja bem vindo ao Todo List!`}
          />
          <div className="card">
            <SimpleCard title={'Cadastradas'} textValue={registeredTasks.length} />
            <SimpleCard title={'Andamento'} textValue={tasksProgress.length} />
          </div>
          <div className="card">
            <SimpleCard title={'Concluídas'} textValue={completedTasks.length} />
            <CardButton title={'Visualizar Tarefas'} />
          </div>
        </Container>
      </div>
    </div>
  );
};

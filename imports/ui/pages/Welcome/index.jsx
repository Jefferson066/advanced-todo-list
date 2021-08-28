import React from 'react';
import { Meteor } from 'meteor/meteor';
import _ from 'lodash';
import { useTracker } from 'meteor/react-meteor-data';
import { Btn } from '../../components/Btn';
import { MyTypography } from '../../components/MyTypography';
import { MyDrawer } from '../../components/Drawer';
import { TasksCollection } from '../../../api/database/TasksCollection';

const URL_PATHS = {
  TODOLIST: '/authenticated/todolist',
};

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

  const handleClick = (e) => {
    e.preventDefault();
    history.push(URL_PATHS.TODOLIST);
  };

  return (
    <div className="app">
      <div className="main">
        <MyDrawer />
        <MyTypography
          variant={'h4'}
          textValue={`Olá ${user.username}, seja bem vindo ao Todo List!`}
        />
        <div>
          <h2>Cdastradas{registeredTasks.length}</h2>
        </div>
        <div>
          <h2>Andamento{tasksProgress.length}</h2>
        </div>
        <div>
          <h2>Concluidas{completedTasks.length}</h2>
        </div>
        <div className=" center">
          <Btn event={handleClick} textValue={'Visualizar Tarefas'} />
        </div>
      </div>
    </div>
  );
};

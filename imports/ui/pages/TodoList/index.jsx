import React from 'react';
import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '../../../api/database/TasksCollection';
import { useTracker } from 'meteor/react-meteor-data';

import { MyTypography } from '../../components/MyTypography';
import { TaskList } from '../../components/TaskList';

import { Container, TextField } from '@material-ui/core';
import { MyDrawer } from '../../components/Drawer';
import { BtnAddTask } from '../../components/BtnAddTask';
import { MyCheckbox } from '../../components/CheckBox';
import { useState } from 'react';

const URL_PATHS = {
  NEWTASK: '/authenticated/todolist/new',
  EDITTASK: '/authenticated/todolist/edit',
};

export const TodoList = ({ history }) => {
  const user = useTracker(() => Meteor.user());

  const [state, setState] = useState(false); // estado do CHECKBOX
  const [inputSearch, setInputSearch] = useState(''); // estado do input search
  const { tasks } = useTracker(() => {
    Meteor.subscribe('tasks.public-private-list', state, inputSearch);
    const tasks = TasksCollection.find({}, { sort: { createdAt: -1 } }).fetch();
    return { tasks };
  });

  // eslint-disable-next-line no-unused-vars
  const handleChangecompleted = (e) => {
    setState(!state);
  };

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
        try {
          Meteor.call('tasks.remove', _id);
        } catch (error) {
          console.log(error);
        }
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
            <div style={{ marginRight: '20px' }}>
              <MyTypography variant={'h4'} textValue={'Todo List'} />
            </div>
            <div className={'center'}>
              <TextField
                variant="outlined"
                value={inputSearch}
                onChange={(e) => setInputSearch(e.target.value)}
                type="search"
                label={'Search'}
              />
            </div>
            <div className="btn center">
              <BtnAddTask handleAddTaskClick={handleAddTaskClick} />
              {inputSearch <= 0 && (
                <MyCheckbox state={state} handleChangecompleted={handleChangecompleted} />
              )}
            </div>
            <TaskList tasks={tasks} onDeleteClick={deleteTask} onEditClick={editTaskClick} />
          </Container>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Btn } from '../../components/Btn';
import { MyTypography } from '../../components/MyTypography';
import { MyDrawer } from '../../components/Drawer';

const URL_PATHS = {
  TODOLIST: '/authenticated/todolist',
};

export const Welcome = ({ history }) => {
  const user = useTracker(() => Meteor.user());

  const handleClick = (e) => {
    e.preventDefault();
    history.push(URL_PATHS.TODOLIST);
  };

  return (
    <div className="app">
      <div className="main">
        <MyDrawer />
        <MyTypography variant={'h4'} textValue={` Bem vindo ${user.username}!`} />
        <div className=" center">
          <Btn event={handleClick} textValue={'Visualizar Tarefas'} />
        </div>
      </div>
    </div>
  );
};

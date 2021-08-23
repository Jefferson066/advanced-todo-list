import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';

import { BtnLogout } from '../../components/BtnLogout';
import { Btn } from '../../components/Btn';
import { MyTypography } from '../../components/MyTypography';

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
      <div className="logout">
        <BtnLogout />
      </div>
      <div className="main">
        <MyTypography variant={'h4'} textValue={` Bem vindo ${user.username}!`} />
        <div className="btn">
          <Btn event={handleClick} textValue={'Visualizar Tarefas'} />
        </div>
      </div>
    </div>
  );
};

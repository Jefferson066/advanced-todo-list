import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';

import { BtnLogout } from '../../components/BtnLogout';
import { Button, Typography } from '@material-ui/core';

const URL_PATHS = {
  TASKS: '/authenticated/todolist',
};

export const Welcome = ({ history }) => {
  const user = useTracker(() => Meteor.user());

  const handleClick = (e) => {
    e.preventDefault();
    history.push(URL_PATHS.TASKS);
  };

  return (
    <div className="app">
      <div className="logout">
        <BtnLogout />
      </div>
      <div className="main">
        <Typography variant="h4" align="center">
          Bem vindo {user.username}!
        </Typography>
        <div>
          <Button variant="contained" color="primary" onClick={handleClick}>
            Visualizar Tarefas
          </Button>
        </div>
      </div>
    </div>
  );
};

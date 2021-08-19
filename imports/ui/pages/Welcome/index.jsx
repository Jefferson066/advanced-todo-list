import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';

const URL_PATHS = {
  TASKS: '/authenticated/todolist',
};

export const Welcome = ({ history }) => {
  const user = useTracker(() => Meteor.user());
  const logout = () => Meteor.logout();

  const handleClick = (e) => {
    e.preventDefault();
    history.push(URL_PATHS.TASKS);
  };

  return (
    <div className="app">
      <div className="logout">
        <button className="btn" onClick={logout}>
          Logout
        </button>
      </div>
      <div className="main">
        <h2>Bem vindo {user.username}!</h2>
        <div>
          <button className="btn" onClick={handleClick}>
            Visualizar Tarefas
          </button>
        </div>
      </div>
    </div>
  );
};

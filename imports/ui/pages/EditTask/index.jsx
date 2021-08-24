import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { BtnLogout } from '../../components/BtnLogout';
import { Btn } from '../../components/Btn';
import { useParams } from 'react-router-dom';

const URL_PATHS = {
  TODOLIST: '/authenticated/todolist',
};
export const EditTask = ({ history }) => {
  const { _id } = useParams();

  // eslint-disable-next-line no-unused-vars
  const user = useTracker(() => Meteor.user());

  // eslint-disable-next-line no-unused-vars
  const handleBackClick = (e) => {
    e.preventDefault();
    history.push(URL_PATHS.TODOLIST);
  };

  return (
    <div className="app">
      <div className="logout">
        <BtnLogout />
      </div>
      <div className="main">
        <h1>Tela de edição {_id}</h1>
        <div className="btn">
          <Btn textValue={'Voltar'} event={handleBackClick} />
        </div>
      </div>
    </div>
  );
};

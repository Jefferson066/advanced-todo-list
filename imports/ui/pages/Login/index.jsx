import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { FormLogin } from '../../components/FormLogin/index';

const URL_PATHS = {
  HOME: '/authenticated',
};
export const Login = ({ history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    Meteor.loginWithPassword(username, password, function (err) {
      if (err !== undefined) {
        setError('Error in processing login!');
        return;
      }
      history.push(URL_PATHS.HOME);
    });
  };
  // add div app. main
  return (
    <FormLogin
      submit={handleSubmit}
      error={error}
      setUsername={setUsername}
      setPassword={setPassword}
    />
  );
};

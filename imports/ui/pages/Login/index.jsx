import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { FormLogin } from '../../components/FormLogin/index';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const error = function (error) {
      if (error !== undefined) {
        // eslint-disable-next-line no-unused-vars
        setError((error) => 'Error in processing login. ');
      }
    };

    Meteor.loginWithPassword(username, password, error);
  };

  return <FormLogin submit={handleSubmit} error={error} setUsername={setUsername} setPassword={setPassword} />;
};

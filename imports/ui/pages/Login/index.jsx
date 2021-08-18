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
        setError((error) => 'Error in processing login. ' + error.reason + '.');
      }
    };

    Meteor.loginWithPassword(username, password, error);
  };

  return <FormLogin submit={handleSubmit} error={error} setUsername={setUsername} setPassword={setPassword} />;
};

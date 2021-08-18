import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { FormRegister } from '../../components/FormRegister';

export const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-unused-vars
    setSuccess((success) => '');
    const validate = validatePassword(password, repassword);

    if (!validate) {
      return;
    }

    try {
      Meteor.call('user.create', username, password);
      // eslint-disable-next-line no-unused-vars
      setError((error) => '');
      // eslint-disable-next-line no-unused-vars
      setSuccess((success) => 'Cadastro realizado!');
    } catch (error) {
      console.log(error);
    }
  };

  const validatePassword = (password, repassword) => {
    if (password === repassword) {
      return true;
    } else {
      // eslint-disable-next-line no-unused-vars
      setError((error) => 'Os campos Password não se correspondem!');
      return false;
    }
  };

  return (
    <FormRegister
      submit={handleSubmit}
      error={error}
      success={success}
      setUsername={setUsername}
      setPassword={setPassword}
      setRepassword={setRepassword}
    />
  );
};

import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
//import { Accounts } from 'meteor/accounts-base';
import { Link } from 'react-router-dom';

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
    <div className="app">
      <div className="main">
        <form onSubmit={handleSubmit} className="login-form">
          <div className="msg-error">{error && <h2>{error}</h2>}</div>
          <div className="msg-success">{success && <h2>{success}</h2>}</div>
          <h2>Cadastrar-se!</h2>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="******"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Confirm Password</label>

            <input
              type="password"
              placeholder="******"
              name="re-password"
              onChange={(e) => setRepassword(e.target.value)}
              required
            />
          </div>
          <div>
            <button type="submit">Cadastrar</button>
          </div>
          <Link className="link" to="/">
            Início
          </Link>
        </form>
      </div>
    </div>
  );
};

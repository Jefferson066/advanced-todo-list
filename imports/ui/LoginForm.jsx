import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';

export const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = function (error) {
      if (error !== undefined) {
        setError('Error in processing login. ' + error.reason + '.');
      }
    };
    Meteor.loginWithPassword(username, password, error);
  };
  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className="msg-error">{error && <h2>{error}</h2>}</div>
      <h2>Bem vindo ao todo list!</h2>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Username"
          name="username"
          required
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>

        <input
          type="password"
          placeholder="******"
          name="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Log In</button>
      </div>
      <Link className="link" to="/register">
        Cadastrar
      </Link>
    </form>
  );
};

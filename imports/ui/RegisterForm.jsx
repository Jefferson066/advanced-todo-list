import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterForm = () => {
  const submit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="app">
      <div className="main">
        <form onSubmit={submit} className="login-form">
          <h2>Cadastrar-se!</h2>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="Username" name="username" required />
          </div>

          <div>
            <label htmlFor="password">Password</label>

            <input type="password" placeholder="******" name="password" required />
          </div>
          <div>
            <label htmlFor="password">Password</label>

            <input type="password" placeholder="******" name="re-password" required />
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

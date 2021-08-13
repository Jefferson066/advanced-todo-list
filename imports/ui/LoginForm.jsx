import React from 'react';

import { Link } from 'react-router-dom';

export const LoginForm = () => {
  //let match = useRouteMatch();
  const submit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={submit} className="login-form">
      <h2>Bem vindo ao todo list!</h2>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Username" name="username" required />
      </div>

      <div>
        <label htmlFor="password">Password</label>

        <input type="password" placeholder="******" name="password" required />
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

//<Link className="link" to={`${match.url}/register`}>Cadastrar</Link>

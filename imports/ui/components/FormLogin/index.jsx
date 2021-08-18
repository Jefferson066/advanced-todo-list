import { Link } from 'react-router-dom';
import React from 'react';
// eslint-disable-next-line react/prop-types
export const FormLogin = ({ submit, error, setUsername, setPassword }) => (
  <form onSubmit={submit} className="login-form">
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
      <label htmlFor="password ">Password</label>

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

import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export const FormRegister = ({
  submit,
  error,
  success,
  setUsername,
  setPassword,
  setRepassword,
}) => (
  <form onSubmit={submit} className="login-form">
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
      <button className="btn-form" type="submit">
        Cadastrar
      </button>
    </div>
    <Link className="link" to="/">
      Início
    </Link>
  </form>
);

import React from 'react';

// eslint-disable-next-line no-unused-vars
import { Container, Button, Typography } from '@material-ui/core';

export const TaskForm = ({ handleSubmit, msg, name, text, data, setName, setText, setData }) => {
  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <Typography variant="h4" align="center">
        Adicionar Tarefa
      </Typography>
      {msg && (
        <div className="msg-success">
          <Typography variant="h5" align="center">
            {msg}
          </Typography>
        </div>
      )}
      <div>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Descrição"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Data"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
      </div>
      <div>
        <Button variant="contained" color="primary" type="submit">
          Adicionar
        </Button>
      </div>
    </form>
  );
};

import React from 'react';
import { Container, Button, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

export const TaskForm = ({ handleSubmit, msg, name, text, setName, setText, setData }) => {
  return (
    <Container maxWidth="sm">
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
        <div className="input">
          <TextField
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="outlined-basic"
            label="Nome"
            variant="outlined"
          />
        </div>
        <div className="input">
          <TextField
            required
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            id="outlined-basic"
            label="Descrição"
            variant="outlined"
          />
        </div>
        <div className="input">
          <TextField
            required
            id="datetime-local"
            label="Data"
            variant="outlined"
            type="datetime-local"
            onChange={(e) => setData(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div className="btn">
          <Button variant="contained" color="primary" type="submit">
            Adicionar
          </Button>
        </div>
      </form>
    </Container>
  );
};

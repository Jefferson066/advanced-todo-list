import React from 'react';
import { Container, Fab, MenuItem, TextField } from '@material-ui/core';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import { MyTypography } from '../MyTypography';
import { InputName } from '../InputName';
import { InputData } from '../InputData';
import { Btn } from '../Btn';
import { BtnSubmit } from '../BtnSubmit';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '35ch',
    },
  },
}));

export const FormProfileEdit = ({
  handleSubmit,
  handleUploadClick,
  msg,
  name,
  setName,
  email,
  setEmail,
  handleSetViewTrue,
  setBirthDate,
  birthDate,
  setSex,
  sex,
  setCompany,
  company,
}) => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <form className="task-form" onSubmit={handleSubmit}>
        <MyTypography variant={'h4'} textValue={'Editar Usuário'} />
        {msg && (
          <div className="msg-success">
            <MyTypography variant={'h5'} textValue={msg} />
          </div>
        )}
        <div>
          <input
            accept="image/*"
            style={{ display: 'none' }}
            id="contained-button-file"
            multiple
            type="file"
            onChange={handleUploadClick}
          />
          <label htmlFor="contained-button-file">
            <Fab component="span" style={{ margin: 10 }}>
              <AddPhotoAlternateIcon />
            </Fab>
          </label>
        </div>
        <div className="input">
          <InputName name={'Nome'} value={name} label="Nome" setName={setName} />
        </div>
        <div>
          <TextField
            variant="outlined"
            className={classes.root}
            name={'email'}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
          />
        </div>
        <div>
          <InputData className={classes.root} setData={setBirthDate} value={birthDate} />
        </div>
        <div>
          <TextField
            select
            className={classes.root}
            label="Selecione seu sexo"
            onChange={(e) => setSex(e.target.value)}
            value={sex}
            variant="outlined"
          >
            <MenuItem value={'masculino'}>Masculino</MenuItem>
            <MenuItem value={'feminino'}>Feminino</MenuItem>
          </TextField>
        </div>
        <div>
          <TextField
            className={classes.root}
            variant="outlined"
            name={'company'}
            onChange={(e) => setCompany(e.target.value)}
            value={company}
            label="Empresa"
          />
        </div>
        <div className="center btn">
          <Btn textValue={'Voltar'} event={handleSetViewTrue} />
          <BtnSubmit textValue={'Salvar'} />
        </div>
      </form>
    </Container>
  );
};

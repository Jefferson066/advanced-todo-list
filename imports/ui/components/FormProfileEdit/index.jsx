import React from 'react';
import { Container, Fab, MenuItem, TextField } from '@material-ui/core';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import { MyTypography } from '../MyTypography';
import { InputName } from '../InputName';
import { InputData } from '../InputData';
import { Btn } from '../Btn';
import { BtnSubmit } from '../BtnSubmit';

export const FormProfileEdit = ({
  handleSubmit,
  handleUploadClick,
  handleBackClick,
  msg,
  name,
  setName,
  email,
  setEmail,
  setBirthDate,
  birthDate,
  setSex,
  sex,
  setCompany,
  company,
}) => {
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
        <div className="input">
          <TextField
            variant="outlined"
            name={'email'}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
          />
        </div>
        <div className="input">
          <InputData setData={setBirthDate} value={birthDate} />
        </div>
        <div className="input">
          <TextField
            select
            label="Selecione"
            onChange={(e) => setSex(e.target.value)}
            value={sex}
            helperText="Selecione seu sexo"
            variant="outlined"
          >
            <MenuItem value={'masculino'}>Masculino</MenuItem>
            <MenuItem value={'feminino'}>Feminino</MenuItem>
          </TextField>
        </div>
        <div className="input">
          <TextField
            variant="outlined"
            name={'company'}
            onChange={(e) => setCompany(e.target.value)}
            value={company}
            label="Empresa"
          />
        </div>
        <div className="center btn">
          <Btn textValue={'Voltar'} event={handleBackClick} />
          <BtnSubmit textValue={'Salvar'} />
        </div>
      </form>
    </Container>
  );
};

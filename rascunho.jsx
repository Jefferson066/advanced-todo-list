import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { useState } from 'react';

import { Container } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import { BtnLogout } from '../../components/BtnLogout';
import { MyTypography } from '../../components/MyTypography';
import { InputName } from '../../components/InputName';
import { InputText } from '../../components/InputText';
import { InputData } from '../../components/InputData';
import { Btn } from '../../components/Btn';
import { BtnSubmit } from '../../components/BtnSubmit';

const URL_PATHS = {
  HOME: '/authenticated',
};

export const UserProfile = ({ history }) => {
  // eslint-disable-next-line no-unused-vars
  const user = useTracker(() => Meteor.user());

  const [view, setView] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [msg, setMsg] = useState('');

  const handleBackClick = (e) => {
    e.preventDefault();
    history.push(URL_PATHS.HOME);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('clicado em editar');
  };

  /*  const handleStatusChange = (e) => {
    setViewStatus(e.target.value);
  }; */

  const handleEditClick = (e) => {
    e.preventDefault();
    setView(false);
  };

  /* const handlePrivateChange = (e) => {
    setIsPrivate(e.target.value);
  }; */
  return (
    <div className="app">
      <div className="logout">
        <BtnLogout />
      </div>
      <div className="main">
        {view ? (
          <Container maxWidth="sm">
            <form className="task-form">
              <MyTypography variant={'h4'} textValue={'Dados do usuario'} />
              <div className="input">
                <InputName name={'name'} value={'nome'} label={'Nome'} />
              </div>
              <div className="input">
                <InputText name={'email'} value={'Email'} label="Email" />
              </div>
              <div className="input">
                <InputData />
              </div>
              <div className="input">
                <TextField
                  id="outlined-select-currency"
                  select
                  value={''}
                  label="Selecione"
                  helperText="Selecione seu sexo"
                  variant="outlined"
                >
                  <MenuItem value={'publica'}>Masculino</MenuItem>
                  <MenuItem value={'pessoal'}>Feminino</MenuItem>
                </TextField>
              </div>
              <div className="input">
                <InputText name={'emrpesa'} value={'Empresa'} label="Empresa" />
              </div>
              <div className="center btn">
                <Btn textValue={'Voltar'} event={handleBackClick} />
                <Btn textValue={'Editar'} event={handleEditClick} />
              </div>
            </form>
          </Container>
        ) : (
          <Container maxWidth="sm">
            <form className="task-form" onSubmit={handleSubmit}>
              <MyTypography variant={'h4'} textValue={'Editar Usuário'} />
              {msg && (
                <div className="msg-success">
                  <MyTypography variant={'h5'} textValue={msg} />
                </div>
              )}
              <div className="input">
                <InputName name={'name'} value={'nome'} label={'Nome'} />
              </div>
              <div className="input">
                <InputText name={'email'} value={'Email'} label="Email" />
              </div>
              <div className="input">
                <InputData />
              </div>
              <div className="input">
                <TextField
                  id="outlined-select-currency"
                  select
                  value={''}
                  label="Selecione"
                  helperText="Selecione sexo"
                  variant="outlined"
                >
                  <MenuItem value={'publica'}>Masculino</MenuItem>
                  <MenuItem value={'pessoal'}>Feminino</MenuItem>
                </TextField>
              </div>
              <div className="input">
                <InputText name={'emrpesa'} value={'Empresa'} label="Empresa" />
              </div>
              <div className="center btn">
                <Btn textValue={'Voltar'} event={handleBackClick} />
                <BtnSubmit textValue={'Salvar'} />
              </div>
            </form>
          </Container>
        )}
      </div>
    </div>
  );
};

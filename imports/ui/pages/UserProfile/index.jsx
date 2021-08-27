import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { useState } from 'react';

import { Container } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Fab from '@material-ui/core/Fab';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';

import { MyTypography } from '../../components/MyTypography';
import { InputName } from '../../components/InputName';
import { InputViewName } from '../../components/InputViewName';
import { Btn } from '../../components/Btn';
import { BtnSubmit } from '../../components/BtnSubmit';
import { InputViewData } from '../../components/InputViewData';
import { MyDrawer } from '../../components/Drawer';
import { InputData } from '../../components/InputData';

const URL_PATHS = {
  HOME: '/authenticated',
};

export const UserProfile = ({ history }) => {
  const user = useTracker(() => Meteor.user());

  const [view, setView] = useState(true);
  const [name, setName] = useState(user.profile.name);
  const [email, setEmail] = useState(user.profile.email);
  const [birthDate, setBirthDate] = useState(user.profile.birthDate);
  const [sex, setSex] = useState(user.profile.sex);
  const [company, setCompany] = useState(user.profile.company);
  const [imgBase64, setBase64] = useState('');

  const [msg, setMsg] = useState('');

  const handleBackClick = (e) => {
    e.preventDefault();
    history.push(URL_PATHS.HOME);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Meteor.call('user.update', name, email, birthDate, sex, company, imgBase64);
    setMsg('Dados Editados!');
  };

  const handleEditClick = (e) => {
    e.preventDefault();
    setView(false);
  };

  const handleUploadClick = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = _handleReaderLoaded;
    reader.readAsBinaryString(file);
  };

  const _handleReaderLoaded = (e) => {
    let binaryString = e.target.result;
    setBase64(btoa(binaryString));
  };

  return (
    <div className="app">
      <div className="main">
        <MyDrawer />
        {view ? (
          <Container maxWidth="sm">
            <form className="task-form" onSubmit={handleSubmit}>
              <MyTypography variant={'h4'} textValue={'Dados do usuario'} />
              <div className="input"></div>
              <div className="input">
                <InputViewName name={'name'} value={name} label={'Nome'} />
              </div>
              <div className="input">
                <TextField disabled variant="outlined" name={'email'} value={email} label="Email" />
              </div>
              <div className="input">
                <InputViewData value={birthDate} />
              </div>
              <div className="input">
                <TextField disabled variant="outlined" name={'sex'} value={sex} label="Sexo" />
              </div>
              <div className="input">
                <TextField
                  disabled
                  variant="outlined"
                  name={'company'}
                  value={company}
                  label="Empresa"
                />
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
        )}
      </div>
    </div>
  );
};

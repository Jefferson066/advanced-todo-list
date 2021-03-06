import React from 'react';
import { Container } from '@material-ui/core';
import { MyTypography } from '../MyTypography';
import { InputName } from '../InputName';
import { InputPassword } from '../InputPassword';
import { BtnSubmit } from '../BtnSubmit';
import { LinkComponent } from '../Link';

export const FormLogin = ({ submit, error, username, password, setUsername, setPassword }) => (
  <Container maxWidth="sm">
    <form onSubmit={submit} className="login-form">
      <MyTypography variant={'h5'} textValue={'Bem vindo ao todo list!'} />
      {error && (
        <div className="msg-error">
          <MyTypography variant={'h6'} textValue={error} />
        </div>
      )}
      <div className="input">
        <InputName name={'username'} value={username} label={'Username'} setName={setUsername} />
      </div>
      <div>
        <InputPassword
          label={'Password'}
          value={password}
          name={'password'}
          setPassword={setPassword}
        />
      </div>
      <div className="btn">
        <BtnSubmit textValue={'Log In'} />
      </div>
      <div className="link btn">
        <LinkComponent textValue={'Cadastrar'} to={'/register'} />
      </div>
    </form>
  </Container>
);

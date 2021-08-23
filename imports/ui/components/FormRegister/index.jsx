import React from 'react';
import { Container } from '@material-ui/core';
import { LinkComponent } from '../Link';
import { MyTypography } from '../MyTypography';
import { InputName } from '../InputName';
import { InputPassword } from '../InputPassword';
import { BtnSubmit } from '../BtnSubmit';

// eslint-disable-next-line react/prop-types
export const FormRegister = ({
  submit,
  error,
  success,
  setUsername,
  setPassword,
  setRepassword,
}) => (
  <Container maxWidth="sm">
    <form onSubmit={submit} className="login-form">
      <MyTypography variant={'h5'} textValue={'Cadastrar-se!'} />
      {error && (
        <div className="msg-error">
          <MyTypography variant={'h6'} textValue={error} />
        </div>
      )}
      {success && (
        <div className="msg-success">
          <MyTypography variant={'h6'} textValue={success} />
        </div>
      )}
      <div className="input">
        <InputName name={'username'} label={'Username'} setName={setUsername} />
      </div>
      <div className="input">
        <InputPassword label={'Password'} name={'password'} setPassword={setPassword} />
      </div>
      <div className="input">
        <InputPassword
          label={'Confirm Password'}
          name={'re-password'}
          setPassword={setRepassword}
        />
      </div>
      <div className="btn">
        <BtnSubmit textValue={' Cadastrar'} />
      </div>
      <div className="link">
        <LinkComponent textValue={'Início'} to={'/'} />
      </div>
    </form>
  </Container>
);

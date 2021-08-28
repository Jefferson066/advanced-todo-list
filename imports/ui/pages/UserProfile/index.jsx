import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { useState } from 'react';

import { MyDrawer } from '../../components/Drawer';
import { FormProfileView } from '../../components/FormProfileView';
import { FormProfileEdit } from '../../components/FormProfileEdit';

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
    try {
      Meteor.call('user.update', name, email, birthDate, sex, company, imgBase64);
      setMsg('Dados Editados!');
    } catch (error) {
      console.log(error);
    }
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
          <FormProfileView
            handleSubmit={handleSubmit}
            handleBackClick={handleBackClick}
            handleEditClick={handleEditClick}
            email={email}
            name={name}
            birthDate={birthDate}
            sex={sex}
            company={company}
          />
        ) : (
          <FormProfileEdit
            handleSubmit={handleSubmit}
            handleUploadClick={handleUploadClick}
            handleBackClick={handleBackClick}
            msg={msg}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            setBirthDate={setBirthDate}
            birthDate={birthDate}
            setSex={setSex}
            sex={sex}
            setCompany={setCompany}
            company={company}
          />
        )}
      </div>
    </div>
  );
};

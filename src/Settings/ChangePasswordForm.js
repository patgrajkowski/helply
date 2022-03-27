import React from 'react';
import Button from '../components/Button/Button';
import InputField from '../components/Fields/InputField/InputField';
import PasswordField from '../components/Fields/PasswordField/PasswordField';
import styles from './Settings.module.css';
const ChangePasswordForm = ({ theme }) => {
  return (
    <div class={styles.setting}>
      Zmień hasło
      <PasswordField
        theme={theme}
        type='password'
        placeholder='Nowe hasło'
      ></PasswordField>
      <PasswordField
        theme={theme}
        type='password'
        placeholder='Obecne hasło'
      ></PasswordField>
      <div class={styles.setting__button}>
        <Button primary>OK</Button>
      </div>
    </div>
  );
};

export default ChangePasswordForm;

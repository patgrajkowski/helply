import React from 'react';
import Button from '../components/Button/Button';
import InputField from '../components/Fields/InputField/InputField';
import styles from './Settings.module.css';

const ChangeNameForm = ({ theme }) => {
  return (
    <div class={styles.setting}>
      Zmień swoją nazwę
      <InputField theme={theme} placeholder="Nazwa użytkownika"></InputField>
      <div class={styles.setting__button}>
        <Button primary>OK</Button>
      </div>
    </div>
  );
};

export default ChangeNameForm;

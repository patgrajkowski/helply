import React from 'react';
import Button from '../components/Button/Button';
import InputField from '../components/Fields/InputField/InputField';
import styles from './Settings.module.css';
const ChangeAvatarForm = ({ theme }) => {
  return (
    <div class={styles.setting}>
      Ustaw swój avatar
      <InputField
        theme={theme}
        placeholder='Adres url twojego avatara'
      ></InputField>
      <div class={styles.setting__button}>
        <Button primary>OK</Button>
      </div>
    </div>
  );
};

export default ChangeAvatarForm;

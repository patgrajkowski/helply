import React from 'react';
import Button from '../Button/Button';
import InputField from '../Fields/InputField/InputField';
import PasswordField from '../Fields/PasswordField/PasswordField';
import styles from './Settings.module.css';
const ChangePasswordForm = ({ theme }) => {
    return (
        <div className={styles.setting}>
            Zmień hasło
            <PasswordField theme={theme} type="password" placeholder="Nowe hasło"></PasswordField>
            <PasswordField theme={theme} type="password" placeholder="Obecne hasło"></PasswordField>
            <div className={styles.setting__button}>
                <Button primary>OK</Button>
            </div>
        </div>
    );
};

export default ChangePasswordForm;

import React from 'react';
import Button from '../Button/Button';
import InputField from '../Fields/InputField/InputField';
import styles from './Settings.module.css';

const ChangeNameForm = ({ theme }) => {
    return (
        <div className={styles.setting}>
            Zmień swoją nazwę
            <InputField theme={theme} placeholder="Nazwa użytkownika"></InputField>
            <div className={styles.setting__button}>
                <Button primary>OK</Button>
            </div>
        </div>
    );
};

export default ChangeNameForm;

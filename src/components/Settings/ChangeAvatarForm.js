import React from 'react';
import Button from '../Button/Button';
import InputField from '../Fields/InputField/InputField';
import styles from './Settings.module.css';
const ChangeAvatarForm = ({ theme }) => {
    return (
        <div className={styles.setting}>
            Ustaw swój avatar
            <InputField theme={theme} placeholder="Adres url twojego avatara"></InputField>
            <div className={styles.setting__button}>
                <Button primary>OK</Button>
            </div>
        </div>
    );
};

export default ChangeAvatarForm;

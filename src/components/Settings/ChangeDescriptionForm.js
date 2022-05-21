import React from 'react';
import Button from '../Button/Button';
import TextArea from '../Fields/TextArea/TextArea';
import styles from './Settings.module.css';
const ChangeDescriptionForm = ({ theme }) => {
    return (
        <div className={styles.setting}>
            Zmień opis
            <TextArea theme={theme} placeholder="Zmień opis"></TextArea>
            <div className={styles.setting__button}>
                <Button primary>OK</Button>
            </div>
        </div>
    );
};

export default ChangeDescriptionForm;

import React from 'react';
import ForgotPasswordForm from '../../components/Forms/ForgotPasswordForm/ForgotPasswordForm';
import styles from './ForgotPassword.module.css';

const ForgotPassword = ({ theme }) => {
    return (
        <div className={theme === 'light' ? styles.wrapper : styles.wrapper + ` ${styles['wrapper-dark']}`}>
            <div className={styles.form__wrapper}>
                <h1 className={'text-2xl font-bold' + styles.title}>Nie pamiętasz hasła?</h1>
                <p className={styles.paragraph}>
                    Jeżeli adres email jest zarejestrowany, to dostaniesz na niego wiadomość.
                </p>
                <ForgotPasswordForm theme={theme} />
            </div>
        </div>
    );
};

export default ForgotPassword;

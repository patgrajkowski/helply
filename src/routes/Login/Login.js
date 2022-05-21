import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../../components/Forms/LoginForm/LoginForm';
import styles from './Login.module.css';
const Login = ({ theme, auth }) => {
    return (
        <div className={theme === 'light' ? styles.wrapper : styles.wrapper + ` ${styles['wrapper-dark']}`}>
            <div className={styles.form__wrapper}>
                <h1 className="text-2xl font-bold">Zaloguj się</h1>
                <LoginForm theme={theme} auth={auth} />
                <hr></hr>
                <p>
                    Nie masz konta? <Link to="/register">Załóż konto</Link> za darmo
                </p>
            </div>
        </div>
    );
};

export default Login;

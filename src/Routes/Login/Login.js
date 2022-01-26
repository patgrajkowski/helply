import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../../components/Forms/LoginForm/LoginForm';
import styles from './Login.module.css';
const Login = ({ theme }) => {
  return (
    <div
      className={
        theme === 'light'
          ? styles.wrapper
          : styles.wrapper + ` ${styles['wrapper-dark']}`
      }
    >
      <div
        className={
          theme === 'light'
            ? styles.form__wrapper
            : styles.form__wrapper + ` ${styles['form__wrapper-dark']}`
        }
      >
        <h1>Zaloguj się</h1>
        <LoginForm theme={theme} />
        <hr></hr>
        <p>
          Nie masz konta? <Link to='/login'>Załóż konto</Link> za darmo
        </p>
      </div>
    </div>
  );
};

export default Login;

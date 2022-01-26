import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '../../components/Forms/RegisterForm/RegisterForm';
import styles from './Register.module.css';
const Register = ({ theme }) => {
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
        <h1>Dołącz do helply!</h1>
        <p>
          Załóż konto aby skorzystać z pomocy korepetytorów lub samemu zacząć
          pomagać
        </p>
        <RegisterForm theme={theme} />
        <hr></hr>
        <p>
          Masz już konto? <Link to='/login'>Zaloguj się</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

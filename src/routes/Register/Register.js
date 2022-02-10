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
      <div className={styles.form__wrapper}>
        <h1 className={styles.title}>Dołącz do helply!</h1>
        <p className={styles.paragraph}>
          Załóż konto aby skorzystać z pomocy korepetytorów lub samemu zacząć
          pomagać
        </p>
        <RegisterForm theme={theme} />
        <hr />
        <p className={styles.paragraph}>
          Masz już konto? <Link to='/login'>Zaloguj się</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

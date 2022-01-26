import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import styles from './RegisterForm.module.css';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { BiLock } from 'react-icons/bi';
import Button from '../Button/Button';

const RegisterForm = ({ theme }) => {
  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: Yup.object({
        email: Yup.string()
          .email('Wprowadź poprawny adres email')
          .required('Email jest wymagany.'),
        password: Yup.string()
          .min(6, 'Hasło musi posiadać conajmniej 6 znaków')
          .required('Hasło jest wymagane'),
      }),
      onSubmit: ({ email, password }) => {
        console.log(email, password);
      },
    });
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <span
        className={
          theme === 'light'
            ? styles.form__input
            : styles.form__input + ` ${styles['form__input-dark']}`
        }
      >
        <MdOutlineAlternateEmail
          className={
            theme === 'light'
              ? styles.input__icon
              : styles.input__icon + ` ${styles['input__icon-dark']}`
          }
        />
        <input
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          id='email'
          name='email'
          type='text'
          placeholder='Email'
        />
      </span>
      <span
        className={
          theme === 'light'
            ? styles.form__input
            : styles.form__input + ` ${styles['form__input-dark']}`
        }
      >
        <BiLock
          className={
            theme === 'light'
              ? styles.input__icon
              : styles.input__icon + ` ${styles['input__icon-dark']}`
          }
        />
        <input
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          id='password'
          name='password'
          type='password'
          placeholder='Hasło'
        />
      </span>
      <Button type='submit' id='register' primary={true}>
        Załóż konto
      </Button>
    </form>
  );
};
export default RegisterForm;

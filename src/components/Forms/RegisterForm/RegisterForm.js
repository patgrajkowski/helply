import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import styles from './RegisterForm.module.css';
import Button from '../../Button/Button';
import PasswordField from '../../Fields/PasswordField/PasswordField';
import EmailField from '../../Fields/EmailField/EmailField';

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
      <EmailField
        theme={theme}
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        id='email'
        name='email'
        type='text'
        placeholder='Email'
      />
      <PasswordField
        theme={theme}
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        id='pasword'
        name='password'
        type='text'
        placeholder='Hasło'
      />
      <Button type='submit' id='register' primary={true}>
        Załóż konto
      </Button>
    </form>
  );
};
export default RegisterForm;

import React, { useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import styles from '../Forms.module.css';
import Button from '../../Button/Button';
import PasswordField from '../../Fields/PasswordField/PasswordField';
import EmailField from '../../Fields/EmailField/EmailField';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RegisterForm = ({ theme, auth }) => {
  const [alreadyRegistered, setAlreadyRegistered] = useState(false);
  console.log(alreadyRegistered);
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
      onSubmit: async ({ email, password }) => {
        try {
          const response = await axios.post(
            `http://localhost:3002/api/users/register`,
            {
              email,
              password,
            },
            {
              headers: {
                'content-type': 'application/json',
              },
              withCredentials: true,
            }
          );
          setAlreadyRegistered(false);
        } catch (error) {
          console.log(error.response);
          if (error.response.data === 'User already registered')
            setAlreadyRegistered(true);
        }
      },
    });
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <span>
        {alreadyRegistered && (
          <p className={styles.form__error}>
            Podany email już istnieje,{' '}
            <Link to='/forgot_password'>zapomniałeś hasła?</Link>
          </p>
        )}
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
        {touched.email && errors.email ? (
          <p className={styles.form__error}>{errors.email}</p>
        ) : (
          ''
        )}
      </span>
      <span>
        <PasswordField
          theme={theme}
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          id='pasword'
          name='password'
          type='password'
          placeholder='Hasło'
        />
        {touched.password && errors.password ? (
          <p className={styles.form__error}>{errors.password}</p>
        ) : (
          ''
        )}
      </span>
      <Button type='submit' id='register' primary={true}>
        Załóż konto
      </Button>
    </form>
  );
};
export default RegisterForm;

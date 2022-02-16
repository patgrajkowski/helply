import React, { useContext, useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import styles from '../Forms.module.css';
import Button from '../../Button/Button';
import PasswordField from '../../Fields/PasswordField/PasswordField';
import EmailField from '../../Fields/EmailField/EmailField';
import { Link } from 'react-router-dom';
import axios from 'axios';
const LoginForm = ({ theme, auth }) => {
  const [forbidden, setForbidden] = useState(false);
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
            `http://localhost:3002/api/auth/login`,
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
          const { data } = response;
          const { token } = data;
          auth.setAccessToken(token);
          setForbidden(false);
        } catch (error) {
          if (error.response.status === 403) setForbidden(true);
        }
      },
    });
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {forbidden && (
        <p className={styles.form__error}>Podano zły login bądź hasło.</p>
      )}
      <span>
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
      <Link to='/forgot_password'>Nie pamiętasz hasła?</Link>
      <Button type='submit' id='login'>
        Zaloguj się
      </Button>
    </form>
  );
};
export default LoginForm;

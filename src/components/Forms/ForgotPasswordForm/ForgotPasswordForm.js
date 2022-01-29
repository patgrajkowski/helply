import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import Button from '../../Button/Button';
import EmailField from '../../Fields/EmailField/EmailField';
import styles from '../Forms.module.css';

const ForgotPasswordForm = ({ theme }) => {
  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: {
        email: '',
      },
      validationSchema: Yup.object({
        email: Yup.string()
          .email('Wprowadź poprawny adres email')
          .required('Email jest wymagany.'),
      }),
      onSubmit: ({ email, password }) => {
        console.log(email, password);
      },
    });
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
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
      <Button type='submit' id='register'>
        Odzyskaj konto
      </Button>
    </form>
  );
};
export default ForgotPasswordForm;

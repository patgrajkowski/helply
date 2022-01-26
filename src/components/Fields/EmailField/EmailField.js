import React from 'react';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import styles from './EmailField.module.css';
const EmailField = ({
  theme,
  value,
  onChange,
  onBlur,
  id,
  name,
  type,
  placeholder,
}) => {
  return (
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
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </span>
  );
};

export default EmailField;

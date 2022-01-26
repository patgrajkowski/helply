import React from 'react';
import { BiLock } from 'react-icons/bi';
import styles from './PasswordField.module.css';
const PasswordField = ({
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
      <BiLock
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

export default PasswordField;

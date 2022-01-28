import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import Button from '../../Button/Button';
import styles from './SearchBar.module.css';
const SearchBar = ({
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
    <form className={styles.form}>
      <span
        className={
          theme === 'light'
            ? styles.form__input
            : styles.form__input + ` ${styles['form__input-dark']}`
        }
      >
        <IoIosSearch
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
        <Button className={styles.form__button}>Szukaj</Button>
      </span>
    </form>
  );
};

export default SearchBar;

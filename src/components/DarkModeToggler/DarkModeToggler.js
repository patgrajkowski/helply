import React, { useContext } from 'react';
import { BsSunFill } from 'react-icons/bs';
import { IoMdMoon } from 'react-icons/io';
import styles from './DarkModeToggler.module.css';
import ThemeContext from '../../store/ThemeContext';
const DarkModeToggler = ({ className }) => {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext.theme;
  return (
    <span className={`${styles.wrapper} ${className}`}>
      <input
        type='checkbox'
        id='switch'
        className={styles.toggle}
        onChange={themeContext.changeTheme}
        checked={theme !== 'light'}
      />
      <label htmlFor='switch' className={styles.toggle__label}></label>
      {theme === 'light' ? (
        <BsSunFill
          className={`${styles['toggle__icon-light']}`}
          onClick={() => {
            document.getElementById('switch').checked = true;
            themeContext.changeTheme();
          }}
        />
      ) : (
        <IoMdMoon
          className={`${styles['toggle__icon-dark']}`}
          onClick={() => {
            document.getElementById('switch').checked = false;
            themeContext.changeTheme();
          }}
        />
      )}
    </span>
  );
};

export default DarkModeToggler;

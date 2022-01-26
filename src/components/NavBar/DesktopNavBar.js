import React, { useContext } from 'react';
import styles from './DesktopNavBar.module.css';
import logo from '../../images/logo.svg';
import { NavLink } from 'react-router-dom';
import ThemeContext from '../../store/ThemeContext';
import { BsSunFill } from 'react-icons/bs';
import { IoMdMoon } from 'react-icons/io';

const DesktopNavBar = ({ theme }) => {
  const themeContext = useContext(ThemeContext);
  const navLinkClasses =
    theme === 'light'
      ? styles.nav__link
      : styles.nav__link + ` ${styles['nav__link-dark']}`;
  return (
    <header
      className={
        theme === 'light'
          ? styles.header
          : `${styles.header} ${styles['header-dark']}`
      }
    >
      <nav className={styles.header__nav}>
        <div className={styles.logo__wrapper}>
          <NavLink to='/'>
            <img src={logo} alt='logo'></img>
          </NavLink>
          <input
            type='checkbox'
            id='switch'
            className={styles.toggle}
            onClick={themeContext.changeTheme}
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
        </div>
        <ul>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive
                  ? `${navLinkClasses} ${styles['nav__link-active']}`
                  : navLinkClasses
              }
            >
              Kategorie
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive
                  ? `${navLinkClasses} ${styles['nav__link-active']}`
                  : navLinkClasses
              }
            >
              Dodaj ogłoszenie
            </NavLink>
          </li>
          <span
            className={
              theme === 'light'
                ? styles.nav__login
                : styles.nav__login + ` ${styles['nav__login-dark']}`
            }
          >
            <li>
              <NavLink
                to='/login'
                className={({ isActive }) =>
                  isActive
                    ? `${navLinkClasses} ${styles['nav__link-active']}`
                    : navLinkClasses
                }
              >
                Zaloguj się
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/register'
                className={`${navLinkClasses} ${
                  theme === 'light'
                    ? styles.login__button
                    : styles.login__button + ` ${styles['login__button-dark']}`
                }`}
              >
                Zarejestruj się
              </NavLink>
            </li>
          </span>
        </ul>
      </nav>
    </header>
  );
};

export default DesktopNavBar;

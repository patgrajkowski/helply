import React from 'react';
import styles from './DesktopNavBar.module.css';
import logo from '../../images/logo.svg';
import { NavLink } from 'react-router-dom';
const DesktopNavBar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <div className={styles.logo__wrapper}>
          <NavLink to='/'>
            <img src={logo} alt='logo'></img>
          </NavLink>
        </div>
        <ul>
          <li>
            <NavLink
              to='/'
              className={styles.nav__link}
              activeClassName={styles['nav__link--active']}
            >
              Kategorie
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/'
              className={styles.nav__link}
              activeClassName={styles['nav__link--active']}
            >
              Dodaj ogłoszenie
            </NavLink>
          </li>
          <span className={styles.nav__login}>
            <li>
              <NavLink
                to='/'
                className={styles.nav__link}
                activeClassName={styles['nav__link--active']}
              >
                Zaloguj się
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/'
                className={`${styles.nav__link} ${styles.login__button}`}
                activeClassName={styles['nav__link--active']}
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

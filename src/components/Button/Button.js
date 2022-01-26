import React from 'react';
import styles from './Button.module.css';
const Button = ({ type, onClick, className, children, primary }) => {
  const classes = primary
    ? styles.button + ` ${styles['button-primary']}`
    : styles.button;
  return (
    <button type={type || 'button'} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;

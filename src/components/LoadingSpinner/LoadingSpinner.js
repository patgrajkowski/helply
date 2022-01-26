import React from 'react';
import styles from './LoadingSpinner.module.css';
const LoadingSpinner = ({ theme, size }) => {
  const spinnerClasses =
    theme === 'light'
      ? ` ${styles['lds-spinner']} ${styles['lds-spinner-dark']}`
      : `${styles['lds-spinner']}`;
  return (
    <div className={spinnerClasses}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default LoadingSpinner;

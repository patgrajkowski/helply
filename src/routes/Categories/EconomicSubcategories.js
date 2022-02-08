import React from 'react';
import styles from './Categories.module.css';

const EconomicSubcategories = () => {
  return (
    <React.Fragment>
      <li className={styles.subcategories__element}>Marketing</li>
      <li className={styles.subcategories__element}>Rachunkowość</li>
      <li className={styles.subcategories__element}>Finanse</li>
      <li className={styles.subcategories__element}>Bankowość</li>
      <li className={styles.subcategories__element}>Zarządzanie</li>
    </React.Fragment>
  );
};

export default EconomicSubcategories;

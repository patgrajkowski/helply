import React from 'react';
import styles from './Categories.module.css';

const ScienceSubcategories = () => {
  return (
    <React.Fragment>
      <li className={styles.subcategories__element}>Matematyka</li>
      <li className={styles.subcategories__element}>Robotyka</li>
      <li className={styles.subcategories__element}>Elektrotechnika</li>
      <li className={styles.subcategories__element}>Programowanie</li>
      <li className={styles.subcategories__element}>Informatyka</li>
      <li className={styles.subcategories__element}>Fizyka</li>
      <li className={styles.subcategories__element}>Architektura</li>
    </React.Fragment>
  );
};

export default ScienceSubcategories;

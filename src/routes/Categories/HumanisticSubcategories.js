import React from 'react';
import styles from './Categories.module.css';

const HumanisticSubcategories = () => {
  return (
    <React.Fragment>
      <li className={styles.subcategories__element}>Język polski</li>
      <li className={styles.subcategories__element}>Historia</li>
      <li className={styles.subcategories__element}>Filozofia</li>
      <li className={styles.subcategories__element}>Prawo</li>
      <li className={styles.subcategories__element}>Etyka</li>
    </React.Fragment>
  );
};

export default HumanisticSubcategories;

import React from 'react';
import styles from './Categories.module.css';

const BiologySubcategories = () => {
  return (
    <React.Fragment>
      <li className={styles.subcategories__element}>Biologia</li>
      <li className={styles.subcategories__element}>Geografia</li>
      <li className={styles.subcategories__element}>Chemia</li>
      <li className={styles.subcategories__element}>Geodezja</li>
      <li className={styles.subcategories__element}>Medycyna</li>
    </React.Fragment>
  );
};

export default BiologySubcategories;

import React from 'react';
import styles from './Categories.module.css';

const LanguageSubcategories = () => {
  return (
    <React.Fragment>
      <li className={styles.subcategories__element}>Angielski</li>
      <li className={styles.subcategories__element}>Niemiecki</li>
      <li className={styles.subcategories__element}>Francuski</li>
      <li className={styles.subcategories__element}>Hiszpański</li>
      <li className={styles.subcategories__element}>Węgierski</li>
      <li className={styles.subcategories__element}>Rosyjski</li>
    </React.Fragment>
  );
};

export default LanguageSubcategories;

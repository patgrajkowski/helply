import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Categories.module.css';

const EconomicSubcategories = () => {
  return (
    <React.Fragment>
      <li>
        <Link to='/marketing' className={styles.subcategories__element}>
          Marketing
        </Link>
      </li>
      <li>
        <Link to='/counting' className={styles.subcategories__element}>
          Rachunkowość
        </Link>
      </li>
      <li>
        <Link to='/finances' className={styles.subcategories__element}>
          Finanse
        </Link>
      </li>
      <li>
        <Link to='/banking' className={styles.subcategories__element}>
          Bankowość
        </Link>
      </li>
      <li>
        <Link to='/management' className={styles.subcategories__element}>
          Zarządzanie
        </Link>
      </li>
    </React.Fragment>
  );
};

export default EconomicSubcategories;

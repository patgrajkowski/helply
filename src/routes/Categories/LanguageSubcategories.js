import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Categories.module.css';

const LanguageSubcategories = () => {
  return (
    <React.Fragment>
      <li>
        <Link to='/english' className={styles.subcategories__element}>
          Angielski
        </Link>
      </li>
      <li>
        <Link to='/dutch' className={styles.subcategories__element}>
          Niemiecki
        </Link>
      </li>
      <li>
        <Link to='/french' className={styles.subcategories__element}>
          Francuski
        </Link>
      </li>
      <li>
        <Link to='/spanish' className={styles.subcategories__element}>
          Hiszpański
        </Link>
      </li>
      <li>
        <Link to='/hungarian' className={styles.subcategories__element}>
          Węgierski
        </Link>
      </li>
      <li>
        <Link to='/russian' className={styles.subcategories__element}>
          Rosyjski
        </Link>
      </li>
    </React.Fragment>
  );
};

export default LanguageSubcategories;

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Categories.module.css';

const BiologySubcategories = () => {
  return (
    <React.Fragment>
      <li>
        <Link to='/biology' className={styles.subcategories__element}>
          Biologia
        </Link>
      </li>

      <li>
        <Link to='/geography' className={styles.subcategories__element}>
          Geografia
        </Link>
      </li>

      <li>
        <Link to='/chemistry' className={styles.subcategories__element}>
          Chemia
        </Link>
      </li>

      <li>
        <Link to='/geodesy' className={styles.subcategories__element}>
          Geodezja
        </Link>
      </li>

      <li>
        <Link to='/medicine' className={styles.subcategories__element}>
          Medycyna
        </Link>
      </li>
    </React.Fragment>
  );
};

export default BiologySubcategories;

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Categories.module.css';

const HumanisticSubcategories = () => {
  return (
    <React.Fragment>
      <li>
        <Link to='/polish' className={styles.subcategories__element}>
          Język polski
        </Link>
      </li>
      <li>
        <Link to='/history' className={styles.subcategories__element}>
          Historia
        </Link>
      </li>
      <li>
        <Link to='/philosophy' className={styles.subcategories__element}>
          Filozofia
        </Link>
      </li>
      <li>
        <Link to='/law' className={styles.subcategories__element}>
          Prawo
        </Link>
      </li>
      <li>
        <Link to='/ethics' className={styles.subcategories__element}>
          Etyka
        </Link>
      </li>
    </React.Fragment>
  );
};

export default HumanisticSubcategories;

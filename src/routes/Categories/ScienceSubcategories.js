import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Categories.module.css';

const ScienceSubcategories = () => {
  return (
    <React.Fragment>
      <li>
        <Link to='/math' className={styles.subcategories__element}>
          Matematyka
        </Link>
      </li>
      <li>
        <Link to='/robotics' className={styles.subcategories__element}>
          Robotyka
        </Link>
      </li>
      <li>
        <Link to='/electrotechnics' className={styles.subcategories__element}>
          Elektrotechnika
        </Link>
      </li>
      <li>
        <Link to='/coding' className={styles.subcategories__element}>
          Programowanie
        </Link>
      </li>
      <li>
        <Link to='/it' className={styles.subcategories__element}>
          Informatyka
        </Link>
      </li>
      <li>
        <Link to='/physics' className={styles.subcategories__element}>
          Fizyka
        </Link>
      </li>
      <li>
        <Link to='/architecture' className={styles.subcategories__element}>
          Architektura
        </Link>
      </li>
    </React.Fragment>
  );
};

export default ScienceSubcategories;

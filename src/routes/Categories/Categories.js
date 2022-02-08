import React, { useState } from 'react';
import BiologySubcategories from './BiologySubcategories';
import styles from './Categories.module.css';
import EconomicSubcategories from './EconomicSubcategories';
import HumanisticSubcategories from './HumanisticSubcategories';
import LanguageSubcategories from './LanguageSubcategories';
import ScienceSubcategories from './ScienceSubcategories';

const Categories = ({ theme }) => {
  const [activeCategory, setActiveCategory] = useState('none');
  return (
    <div
      className={
        theme === 'light'
          ? styles.wrapper
          : styles.wrapper + ` ${styles['wrapper-dark']}`
      }
    >
      <div className={styles.categories__wrapper}>
        <ul className={styles.categories}>
          <li
            className={
              activeCategory !== 'language'
                ? styles.categories__element
                : styles.categories__element +
                  ` ${styles['categories__element-selected']}`
            }
            onClick={() => {
              setActiveCategory('language');
            }}
          >
            Języki obce
          </li>
          <li
            className={
              activeCategory !== 'humanistic'
                ? styles.categories__element
                : styles.categories__element +
                  ` ${styles['categories__element-selected']}`
            }
            onClick={() => {
              setActiveCategory('humanistic');
            }}
          >
            Humanistyczne
          </li>
          <li
            className={
              activeCategory !== 'science'
                ? styles.categories__element
                : styles.categories__element +
                  ` ${styles['categories__element-selected']}`
            }
            onClick={() => {
              setActiveCategory('science');
            }}
          >
            Ścisłe
          </li>
          <li
            className={
              activeCategory !== 'biology'
                ? styles.categories__element
                : styles.categories__element +
                  ` ${styles['categories__element-selected']}`
            }
            onClick={() => {
              setActiveCategory('biology');
            }}
          >
            Przyrodnicze
          </li>
          <li
            className={
              activeCategory !== 'economic'
                ? styles.categories__element
                : styles.categories__element +
                  ` ${styles['categories__element-selected']}`
            }
            onClick={() => {
              setActiveCategory('economic');
            }}
          >
            Ekonomiczne
          </li>
        </ul>
        <ul className={styles.subcategories}>
          {activeCategory === 'language' && <LanguageSubcategories />}
          {activeCategory === 'humanistic' && <HumanisticSubcategories />}
          {activeCategory === 'science' && <ScienceSubcategories />}
          {activeCategory === 'biology' && <BiologySubcategories />}
          {activeCategory === 'economic' && <EconomicSubcategories />}
        </ul>
      </div>
    </div>
  );
};

export default Categories;

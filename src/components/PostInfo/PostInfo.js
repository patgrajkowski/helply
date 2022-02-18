import React from 'react';
import styles from './PostInfo.module.css';

const PostInfo = ({ theme, post }) => {
  const translate = (category) => {
    switch (category) {
      case 'english':
        return 'angielski';
      case 'dutch':
        return 'niemiecki';
      case 'french':
        return 'francuski';
      case 'spanish':
        return 'hiszpański';
      case 'hungarian':
        return 'węgierski';
      case 'russian':
        return 'rosyjski';
      case 'polish':
        return 'polski';
      case 'history':
        return 'historia';
      case 'philosophy':
        return 'filozofia';
      case 'law':
        return 'prawo';
      case 'robotics':
        return 'robotyka';
      case 'electrotechnics':
        return 'elektrotechnika';
      case 'coding':
        return 'programowanie';
      case 'it':
        return 'informatyka';
      case 'physics':
        return 'fizyka';
      case 'biology':
        return 'biologia';
      case 'geography':
        return 'geografia';
      case 'geodesy':
        return 'geodezja';
      case 'chemistry':
        return 'chemia';
      case 'medicine':
        return 'medycyna';
      case 'counting':
        return 'rachunkowość';
      case 'finances':
        return 'finanse';
      case 'banking':
        return 'bankowość';
      case 'managment':
        return 'zarządzanie';
      case 'marketing':
        return 'marketing';
      case 'primary':
        return 'podstawówka';
      case 'high':
        return 'szkoła średnia';
      case 'studies':
        return 'studia';
    }
  };
  const { price, time, categories, level, description } = post;
  return (
    <div
      className={
        theme === 'light'
          ? styles.post
          : styles.post + ` ${styles['post-dark']}`
      }
    >
      <div className={styles.post__details}>
        <p className={styles.details__property}>Cena:</p>
        <p>{price}</p>
        <p className={styles.details__property}>Czas:</p>
        <p>{time}</p>
        <p className={styles.details__property}>Kategorie:</p>
        <div className={styles.details__categories}>
          <p className={styles.details__category}>
            {categories.map((category) => `${translate(category)} `)}
          </p>
        </div>
        <p className={styles.details__property}>Poziom nauczania:</p>
        <div>
          <p className={styles.details__level}>{level.map((l) => `${l} `)}</p>
        </div>
      </div>
      <div className={styles.post__description}>{description}</div>
    </div>
  );
};

export default PostInfo;

import React from 'react';
import TutorCard from '../TutorCard/TutorCard';
import styles from './LatestSection.module.css';

const LatestSection = ({ theme }) => {
  return (
    <div className={styles.wrapper}>
      <TutorCard theme={theme} />
      <TutorCard theme={theme} />
      <TutorCard theme={theme} />
    </div>
  );
};

export default LatestSection;

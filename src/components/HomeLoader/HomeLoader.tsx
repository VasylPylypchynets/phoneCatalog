import React from 'react';
import styles from './HomeLoader.module.scss';

interface LoaderProps {
  count?: number;
}

const HomeLoader: React.FC<LoaderProps> = ({ count = 5 }) => {
  return (
    <div className={`${styles.skeleton} page__wrapper-center`}>
      <div className={styles.title} />

      <div className={styles.carousel}>
        <div className={styles.carouselArrow} />
        <div className={styles.carouselImage} />
        <div className={styles.carouselArrow} />
      </div>

      <div className={styles.grid}>
        {Array.from({ length: count }).map((_, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardImage} />
            <div className={styles.cardName} />
            <div className={styles.cardPrice} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeLoader;

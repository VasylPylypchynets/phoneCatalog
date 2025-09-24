import React from 'react';
import styles from './ProductListLoader.module.scss';

interface ProductListLoaderProps {
  count?: number;
}

const ProductListLoader: React.FC<ProductListLoaderProps> = ({
  count = 12,
}) => {
  return (
    <div className={styles.skeleton}>
      <div className={styles.breadcrumb} />
      <div className={styles.title} />
      <div className={styles.filters} />
      <div className={styles.grid}>
        {Array.from({ length: count }).map((_, index) => (
          <div key={index} className={styles.card} />
        ))}
      </div>
    </div>
  );
};

export default ProductListLoader;

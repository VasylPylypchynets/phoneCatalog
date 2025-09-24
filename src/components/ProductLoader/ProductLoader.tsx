import React from 'react';
import styles from './ProductLoader.module.scss';

const ProductLoader: React.FC = () => {
  return (
    <div className={styles.productLoaderContainer}>
      <div className={styles.breadcrumbsBar}>
        <div className={`${styles.breadcrumbItem} ${styles.skeletonShimmer}`} />
        <div className={`${styles.breadcrumbItem} ${styles.skeletonShimmer}`} />
      </div>

      <div className={styles.mainSection}>
        <div className={styles.imageGallery}>
          <div className={`${styles.mainImage} ${styles.skeletonShimmer}`} />
          <div className={styles.thumbnailContainer}>
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className={`${styles.thumbnail} ${styles.skeletonShimmer}`}
              />
            ))}
          </div>
        </div>

        <div className={styles.productDetails}>
          <div className={`${styles.productTitle} ${styles.skeletonShimmer}`} />
          <div className={`${styles.productSku} ${styles.skeletonShimmer}`} />

          <div className={`${styles.sectionLabel} ${styles.skeletonShimmer}`} />
          <div className={styles.colorOptions}>
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className={`${styles.colorDot} ${styles.skeletonShimmer}`}
              />
            ))}
          </div>

          <div className={`${styles.sectionLabel} ${styles.skeletonShimmer}`} />
          <div className={styles.capacityOptions}>
            <div
              className={`${styles.capacityBox} ${styles.skeletonShimmer}`}
            />
            <div
              className={`${styles.capacityBox} ${styles.skeletonShimmer}`}
            />
          </div>

          <div className={`${styles.price} ${styles.skeletonShimmer}`} />

          <div className={styles.actionButtons}>
            <div
              className={`${styles.addToCartBtn} ${styles.skeletonShimmer}`}
            />
            <div
              className={`${styles.wishlistBtn} ${styles.skeletonShimmer}`}
            />
          </div>

          <div className={styles.keySpecs}>
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className={`${styles.specLine} ${styles.skeletonShimmer}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.lowerSection}>
        <div className={styles.textBlock}>
          <div
            className={`${styles.sectionHeading} ${styles.skeletonShimmer}`}
          />
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className={`${styles.textLine} ${
                i % 2 === 0 ? styles.full : styles.short
              } ${styles.skeletonShimmer}`}
            />
          ))}
        </div>

        <div className={styles.textBlock}>
          <div
            className={`${styles.sectionHeading} ${styles.skeletonShimmer}`}
          />
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className={`${styles.textLine} ${
                i % 2 === 0 ? styles.full : styles.short
              } ${styles.skeletonShimmer}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductLoader;

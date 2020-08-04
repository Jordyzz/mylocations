import React from 'react';
import { useSelector } from '@redux/useSelector';

import styles from './CategoryPreviewPage.scss';

const CategoryPreviewPage = () => {
  const { selectedCategory } = useSelector(state => state.category);
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{selectedCategory.name}</div>
    </div>
  );
};

export default CategoryPreviewPage;

import React from 'react';

import styles from './CategoryItem.scss';

const CategoryItem = ({ children }) => {
  return (
    <div title={children} className={styles.wrapper}>
      <p className={'ellipsis-overflow'}>{children}</p>
    </div>
  );
};

export default CategoryItem;

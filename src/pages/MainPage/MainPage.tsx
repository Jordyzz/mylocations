import React, { useState, useEffect, useCallback } from 'react';

import styles from './MainPage.scss';
import { useSelector } from '@redux/useSelector';
import { categoryService } from '@core/CategoryService';
import CategoryBlock from '@components/CategoryBlock';

function MainPage() {
  const { categories, selectedCategory } = useSelector((state) => state.category);

  return (
    <div className={styles.wrapper}>
      {categories.map((c) => (
        <CategoryBlock
          key={c.name}
          category={c}
          isSelected={selectedCategory && selectedCategory.name === c.name}
        />
      ))}
    </div>
  );
}

export default MainPage;

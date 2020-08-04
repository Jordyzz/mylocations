import React from 'react';
import classNames from 'classnames';

import styles from './CategoryBlock.scss';
import { CategoryBlockProps } from './CategoryBlock.interface';
import { categoryService } from '@core/CategoryService';

const CategoryBlock = (props: CategoryBlockProps) => {
  const { category, isSelected } = props;

  return (
    <div
      title={category.name}
      className={classNames(styles.wrapper, isSelected && styles.selected, 'ellipsis-overflow')}
      onClick={() => categoryService.setSelectedCategory(category)}>
      {category.name}
    </div>
  );
};

export default CategoryBlock;

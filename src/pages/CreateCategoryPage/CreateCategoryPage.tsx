import React, { useState, useEffect } from 'react';

import history from '@core/history';
import styles from './CreateCategoryPage.scss';
import { categoryService } from '@core/CategoryService';
import { Category } from '@redux/redux.interface';
import Button from '@components/Button';
import { useSelector } from '@redux/useSelector';

const CreateCategoryPage = () => {
  const category = history.location.state as Category;
  const [categoryName, setCategoryName] = useState(category ? category.name : '');
  const [error, setError] = useState(null);
  const { categories } = useSelector(state => state.category);

  useEffect(() => {
    if (!category) {
      categoryService.setSelectedCategory(null);
      setCategoryName('');
    }
  }, [category]);

  const handleClick = () => {
    if (categories.map(c => c.name).includes(categoryName)) {
      setError('Category name already exists. Choose a different name.');
      return;
    }

    category
      ? categoryService.updateCategory(category.name, categoryName)
      : categoryService.createCategory(categoryName);
    history.push('/');
  };

  const onChange = e => {
    setCategoryName(e.target.value);
    setError(null);
  };

  return (
    <div className={styles.wrapper}>
      <input type="text" value={categoryName} onChange={onChange} className={styles.catInput} />
      <Button className={styles.createBtn} onClick={handleClick}>
        {category ? 'Update Category' : 'Create Category'}
      </Button>
      <div className={styles.error}>{error}</div>
    </div>
  );
};

export default CreateCategoryPage;

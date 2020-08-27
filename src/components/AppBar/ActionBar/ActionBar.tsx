import React from 'react';
import classNames from 'classnames';

import styles from './ActionBar.scss';
import { ActionBarProps } from './ActionBar.interface';
import { categoryService } from '@core/CategoryService';
import history from '@core/history';
import Button from '@components/Button';
import Icon from '@components/Icon';

const ActionBar = (props: ActionBarProps) => {
  const { category } = props;

  const onDelete = () => {
    categoryService.deleteCategory(category);
    history.push('/categories');
  };

  return (
    <div className={classNames(styles.wrapper, category && styles.active)}>
      <Button
        title="Preview"
        onClick={() => history.push(`/categories/${category.name}`)}
        className={styles.actionBtn}>
        <Icon type="preview" />
      </Button>
      <Button
        title="Edit"
        onClick={() => history.push(`/categories/create/${category.name}`, category)}
        className={styles.actionBtn}>
        <Icon type="edit" />
      </Button>
      <Button title="Delete" onClick={onDelete} className={styles.actionBtn}>
        <Icon type="trash" />
      </Button>
    </div>
  );
};

export default ActionBar;

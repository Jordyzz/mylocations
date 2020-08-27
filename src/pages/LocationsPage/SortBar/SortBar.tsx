import React from 'react';
import classNames from 'classnames';

import Button from '@components/Button';
import Select from '@components/Select';
import styles from './SortBar.scss';
import { SortBarProps } from './SortBar.interface';

const SortBar = ({
  sort,
  onSort,
  groupBy,
  filterBy,
  onClear,
  categories,
  handleFilter,
  handleGroupBy
}: SortBarProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sort}>
        <Button className={classNames(styles.sortBtn, sort && styles.activeBtn)} onClick={onSort}>
          {sort === 'DESC' ? 'Z - A' : 'A - Z'}
        </Button>
      </div>
      <div className={styles.sort}>
        <Button
          className={classNames(styles.groupByBtn, groupBy && styles.activeBtn)}
          onClick={handleGroupBy}>
          Group by Category
        </Button>
      </div>
      <div className={styles.select}>
        <Select
          placeholder="Filter by Category"
          options={categories.map(c => ({ label: c.name, value: c.name }))}
          value={filterBy}
          onChange={handleFilter}
        />
      </div>
      <Button className={styles.clearBtn} onClick={onClear}>
        Clear All
      </Button>
    </div>
  );
};

export default SortBar;

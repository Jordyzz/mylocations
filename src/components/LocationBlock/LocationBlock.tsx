import React from 'react';
import classNames from 'classnames';

import styles from './LocationBlock.scss';
import { LocationBlockProps } from './LocationBlock.interface';
import CategoryItem from './CategoryItem';

const LocationBlock = (props: LocationBlockProps) => {
  const { location, onClick } = props;

  return (
    <div
      title={location.name}
      className={classNames(styles.wrapper, 'ellipsis-overflow')}
      {...{ onClick }}>
      <div>{location.name}</div>
      <div className={styles.address}>{location.address}</div>
      <div className={styles.categories}>
        {location.categories.map(c => (
          <CategoryItem key={c}>{c}</CategoryItem>
        ))}
      </div>
    </div>
  );
};

export default LocationBlock;

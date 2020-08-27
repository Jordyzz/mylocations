import React from 'react';
import classNames from 'classnames';

import styles from './LocationBlock.scss';
import { LocationBlockProps } from './LocationBlock.interface';
import CategoryItem from './CategoryItem';
import Icon from '@components/Icon';
import { locationService } from '@core/LocationService';

const LocationBlock = (props: LocationBlockProps) => {
  const { location, onClick } = props;

  const handleDelete = e => {
    e.stopPropagation();
    locationService.deleteLocation(location);
  };

  return (
    <div title={location.name} className={styles.wrapper} {...{ onClick }}>
      <div className={styles.header}>
        <div className={'ellipsis-overflow'}>{location.name}</div>
        <Icon type="trash" className={styles.icon} onClick={handleDelete} />
      </div>
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

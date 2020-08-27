import React from 'react';
import { useSelector } from '@redux/useSelector';

import styles from './CategoryPreviewPage.scss';
import LocationBlock from '@components/LocationBlock';
import { locationService } from '@core/LocationService';
import { Redirect } from 'react-router';

const CategoryPreviewPage = () => {
  const { selectedCategory } = useSelector(state => state.category);
  const { locations } = useSelector(state => state.location);

  if (!selectedCategory) return <Redirect to="/categories" />;

  const categorizedLocations = locations.filter(lo =>
    lo.categories.includes(selectedCategory.name)
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{selectedCategory.name}</div>
      <div className={styles.categories}>
        {categorizedLocations.map(cl => (
          <LocationBlock
            key={cl.name}
            location={cl}
            onClick={() => locationService.previewLocationClicked(cl.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryPreviewPage;

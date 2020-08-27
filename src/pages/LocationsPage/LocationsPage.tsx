import React from 'react';

import styles from './LocationsPage.scss';
import { useSelector } from '@redux/useSelector';
import LocationBlock from '@components/LocationBlock';
import history from '@core/history';
import { locationService } from '@core/LocationService';

function LocationsPage() {
  const { locations } = useSelector(state => state.location);

  return (
    <div className={styles.wrapper}>
      {locations.map(l => (
        <LocationBlock
          key={l.name}
          location={l}
          onClick={() => locationService.previewLocationClicked(l.name)}
        />
      ))}
    </div>
  );
}

export default LocationsPage;

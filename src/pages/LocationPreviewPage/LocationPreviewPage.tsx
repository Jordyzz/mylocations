import React from 'react';

import styles from './LocationPreviewPage.scss';
import { useSelector } from '@redux/useSelector';
import history from '@core/history';
import Map from '@components/Map';

function LocationPreviewPage() {
  const { locations } = useSelector(state => state.location);
  const location = locations.find(lo =>
    history.location.pathname.includes(lo.name.replace(/\s/g, ''))
  );

  const { name, address, longitude, latitude, categories } = location;

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.name}>{name}</div>
        <div className={styles.marginBottom}>{address}</div>
        <div
          className={styles.marginBottom}>{`Latitude: ${latitude}, Longitude: ${longitude}`}</div>
        <div className={styles.marginBottom}>{`Categories: ${categories.join(', ')}`}</div>
        <Map userLocation={{ longitude, latitude }} />
      </div>
    </div>
  );
}

export default LocationPreviewPage;

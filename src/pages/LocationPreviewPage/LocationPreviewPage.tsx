import React from 'react';

import styles from './LocationPreviewPage.scss';
import { useSelector } from '@redux/useSelector';
import history from '@core/history';

function LocationPreviewPage() {
  const { locations } = useSelector(state => state.location);
  const location = locations.find(lo =>
    history.location.pathname.includes(lo.name.replace(/\s/g, ''))
  );

  return <div className={styles.wrapper}>{location.name}</div>;
}

export default LocationPreviewPage;

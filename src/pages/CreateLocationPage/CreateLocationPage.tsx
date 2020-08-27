import React, { useState, useEffect } from 'react';

import styles from './CreateLocationPage.scss';
import TextInput from '@components/TextInput';
import NumberInput from '@components/NumberInput';
import Map from '@components/Map';
import { locationService } from '@core/LocationService';
import Button from '@components/Button';
import { useSelector } from '@redux/useSelector';
import Select from '@components/Select';

function CreateLocationPage() {
  const { locations } = useSelector(state => state.location);
  const { categories } = useSelector(state => state.category);

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    locationService.getLocationAddress(longitude, latitude).then(address => setAddress(address));
  }, [longitude, latitude]);

  const onMapClick = (lat, lng) => {
    setLatitude(lat);
    setLongitude(lng);
  };

  const handleCreate = () => {
    if (locations.map(c => c.name).includes(name)) {
      setError('Location name already exists. Choose a different name.');
      return;
    }

    locationService.createLocation({
      name,
      address,
      latitude,
      longitude,
      categories: selectedCategories.map(c => c.value)
    });
  };

  const onLocationNameChange = value => {
    setName(value);
    setError(null);
  };

  return (
    <div className={styles.wrapper}>
      <TextInput
        onChange={e => onLocationNameChange(e.target.value)}
        value={name}
        className={styles.inputMargin}
      />
      <TextInput
        onChange={setAddress}
        value={address}
        disabled={true}
        className={styles.inputMargin}
      />
      <NumberInput
        onChange={e => setLongitude(parseFloat(e.target.value))}
        value={longitude}
        min={-180}
        max={180}
        className={styles.inputMargin}
      />
      <NumberInput
        onChange={e => setLatitude(parseFloat(e.target.value))}
        value={latitude}
        min={-90}
        max={90}
        className={styles.inputMargin}
      />
      <div className={styles.select}>
        <Select
          options={categories.map(c => ({ label: c.name, value: c.name }))}
          value={selectedCategories}
          isMulti={true}
          onChange={setSelectedCategories}
        />
      </div>
      <Map userLocation={{ latitude, longitude }} onClick={onMapClick} />
      <Button className={styles.createBtn} onClick={handleCreate}>
        Create Location
      </Button>
      <div className={styles.error}>{error}</div>
    </div>
  );
}

export default CreateLocationPage;

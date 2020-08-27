import React, { useState, useMemo } from 'react';

import styles from './LocationsPage.scss';
import { useSelector } from '@redux/useSelector';
import LocationBlock from '@components/LocationBlock';
import { locationService } from '@core/LocationService';
import SortBar from './SortBar';

function LocationsPage() {
  const { locations } = useSelector(state => state.location);
  const { categories } = useSelector(state => state.category);

  const [sort, setSort] = useState('');
  const [groupBy, setGroupBy] = useState(false);
  const [filterBy, setFilterBy] = useState(null);

  const onSort = () => {
    if (!sort || sort == 'DESC') {
      setSort('ASC');
      locations.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (b.name < a.name) return 1;

        return 0;
      });
    } else {
      setSort('DESC');
      locations.sort((a, b) => {
        if (a.name > b.name) return -1;
        if (b.name > a.name) return 1;

        return 0;
      });
    }
  };

  const handleFilter = (category: { value: string; label: string }) => {
    setFilterBy(category);
  };

  const handleGroupBy = () => {
    setGroupBy(prevState => !prevState);
  };

  const onClear = () => {
    setSort('');
    setGroupBy(false);
    setFilterBy(null);
  };

  const previewLocations = useMemo(() => {
    if (filterBy) return locations.filter(lo => lo.categories.includes(filterBy.value));

    return locations;
  }, [sort, groupBy, filterBy, locations, categories]);

  return (
    <div className={styles.wrapper}>
      <SortBar
        {...{ sort, groupBy, filterBy, onSort, onClear, categories, handleFilter, handleGroupBy }}
      />
      {!groupBy
        ? previewLocations.map(l => (
            <LocationBlock
              key={l.name}
              location={l}
              onClick={() => locationService.previewLocationClicked(l.name)}
            />
          ))
        : categories.map(category => (
            <div key={category.name} className={styles.categoryHeader}>
              <div className={styles.categoryName}>{category.name}</div>
              {previewLocations
                .filter(loc => loc.categories.includes(category.name))
                .map(l => (
                  <LocationBlock
                    key={`${category.name}-${l.name}`}
                    location={l}
                    onClick={() => locationService.previewLocationClicked(l.name)}
                  />
                ))}
            </div>
          ))}
    </div>
  );
}

export default LocationsPage;

import axios from 'axios';

import { mapboxKey } from '@utils/keys';
import { dispatch } from '@redux/store';
import { createLocation, deleteLocation, initLocations } from '@redux/location';
import history from '@core/history';
import { storageService } from './StorageService';
import { storageKeys } from './storageKeys';
import { Location } from '@redux/redux.interface';

let timeoutHandler: NodeJS.Timeout;

class LocationService {
  initLocations() {
    const locations = storageService.get(storageKeys.locations);
    locations && dispatch(initLocations(locations));
  }

  createLocation(location: Location) {
    dispatch(createLocation(location));
    history.push('/locations');

    const locations = storageService.get(storageKeys.locations);
    storageService.set(storageKeys.locations, locations ? [...locations, location] : [location]);
  }

  deleteLocation(location: Location) {
    dispatch(deleteLocation(location));

    const locations = storageService
      .get(storageKeys.locations)
      .filter(c => c.name !== location.name);
    storageService.set(storageKeys.locations, locations);
  }

  getLocationAddress(longitude: number, latitude: number): Promise<string> {
    clearTimeout(timeoutHandler);
    return new Promise(resolve => {
      timeoutHandler = setTimeout(
        () =>
          axios
            .get(
              `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${mapboxKey}`
            )
            .then(res => {
              resolve(res.data.features.length ? res.data.features[0].place_name : null);
            }),
        300
      );
    });
  }

  previewLocationClicked(name: string) {
    history.push(`/locations/${name.replace(/\s/g, '')}`);
  }
}

export const locationService = new LocationService();

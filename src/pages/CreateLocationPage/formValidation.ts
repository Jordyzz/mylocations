import { Location } from '@redux/redux.interface';

export const formValidaion = (location: Location, locations: Array<Location>) => {
  const errors = [];

  if (!location.name) errors.push('You must enter a Location name.');
  if (locations.find(l => l.name === location.name))
    errors.push('Location name already exists, choose a different Location name.');
  if (!location.address)
    errors.push('Could not find an address for the given coordinates, try again.');
  if (!location.categories.length) errors.push('You must select atleast one category.');

  return errors;
};

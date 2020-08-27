import { StoreAction, LocationState } from './redux.interface.d';

export const initLocations = (payload): StoreAction => ({
  type: 'location/INIT_LOCATION',
  payload
});

export const createLocation = (payload): StoreAction => ({
  type: 'location/CREATE_LOCATION',
  payload
});

export const deleteLocation = (payload): StoreAction => ({
  type: 'location/DELETE_LOCATION',
  payload
});

const initialState: LocationState = {
  locations: []
};

export default function locationReducer(state: LocationState = initialState, action: StoreAction) {
  switch (action.type) {
    case 'location/INIT_LOCATION':
      return { ...state, locations: action.payload };
    case 'location/CREATE_LOCATION':
      return { ...state, locations: [...state.locations, action.payload] };
    case 'location/DELETE_LOCATION':
      return { ...state, locations: state.locations.filter(l => l.name !== action.payload.name) };

    default:
      return state;
  }
}

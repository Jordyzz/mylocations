import { combineReducers, Reducer } from 'redux';
import * as RI from './redux.interface';
import configReducer from './config';
import categoryReducer from './category';
import locationReducer from './location';

const rootReducer = combineReducers({
  config: configReducer as Reducer<RI.ConfigState>,
  category: categoryReducer as Reducer<RI.CategoryState>,
  location: locationReducer as Reducer<RI.LocationState>
});

export default rootReducer;

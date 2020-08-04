import { combineReducers, Reducer } from 'redux';
import * as RI from './redux.interface';
import configReducer from './config';
import categoryReducer from './category';

const rootReducer = combineReducers({
  config: configReducer as Reducer<RI.ConfigState>,
  category: categoryReducer as Reducer<RI.CategoryState>,
});

export default rootReducer;

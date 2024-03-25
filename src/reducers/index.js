import { combineReducers } from 'redux';

import gardenReducer from './garden';

const rootReducer = combineReducers({
  garden: gardenReducer,
});

export default rootReducer;
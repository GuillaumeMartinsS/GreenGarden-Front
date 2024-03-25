import { createStore, applyMiddleware, compose } from 'redux';

import reducer from '../reducers';

// == Import Middlewares
//* exemple : import apiMiddleWare from 'src/middlewares/api';
import gardenApi from '../middlewares/gardenApi';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  // on le branche sur le store
  applyMiddleware(gardenApi),
);

const store = createStore(reducer, enhancers);

export default store;
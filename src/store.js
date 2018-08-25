import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const getMiddleware = () => {
  const middleware = [thunk];
  if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
  }
  return applyMiddleware(...middleware);
};

export default createStore(rootReducer, getMiddleware());

import { applyMiddleware, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

export const history = createBrowserHistory();

const getMiddleware = () => {
  const middleware = [thunk, routerMiddleware(history)];
  if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
  }
  return applyMiddleware(...middleware);
};

export const store = createStore(
  connectRouter(history)(rootReducer),
  getMiddleware(),
);

import { combineReducers } from 'redux';

import search from './search';
import pageInfo from './pageInfo';

const rootReducer = combineReducers({
  search,
  pageInfo,
});

export default rootReducer;

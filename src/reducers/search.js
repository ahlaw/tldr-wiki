import {
  HANDLE_SEARCH,
  UPDATE_SUGGESTIONS,
  CLEAR_SUGGESTIONS,
} from '../actions';

export default (state = { query: '', suggestions: [] }, action) => {
  switch (action.type) {
    case HANDLE_SEARCH:
      return Object.assign({}, state, {
        query: action.payload.query,
      });
    case UPDATE_SUGGESTIONS:
      return Object.assign({}, state, {
        suggestions: action.payload.suggestions,
      });
    case CLEAR_SUGGESTIONS:
      return Object.assign({}, state, {
        suggestions: [],
      });
    default:
      return state;
  }
};

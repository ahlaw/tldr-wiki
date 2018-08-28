import { GET_PAGE_INFO } from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_PAGE_INFO:
      return Object.assign({}, state, {
        title: action.payload.title,
        description: action.payload.description,
        missing: action.payload.missing,
      });
    default:
      return state;
  }
};

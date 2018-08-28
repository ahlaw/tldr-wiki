import { push } from 'connected-react-router';

export const CLEAR_SUGGESTIONS = 'CLEAR_SUGGESTIONS';
export const HANDLE_SEARCH = 'HANDLE_SEARCH';
export const SUBMIT_SEARCH = 'SUBMIT_SEARCH';
export const UPDATE_SUGGESTIONS = 'UPDATE_SUGGESTIONS';
export const GET_PAGE_INFO = 'GET_PAGE_INFO';

export function onSearchChange(query) {
  return {
    type: HANDLE_SEARCH,
    payload: { query },
  };
}

export function clearSuggestions() {
  return {
    type: CLEAR_SUGGESTIONS,
  };
}

export function getSuggestions(query) {
  return dispatch => {
    const url = `https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&formatversion=2&list=search&srsearch=${query}`;
    return fetch(url)
      .then(res => res.json(), err => console.err(err))
      .then(data => {
        const suggestions = data.query.search.map(page => page.title);
        return dispatch({ type: UPDATE_SUGGESTIONS, payload: { suggestions } });
      });
  };
}

export function onSearchSubmit(query) {
  return dispatch => {
    dispatch(push(`/wiki/${query}`));
  };
}

export function getPageInfo(query) {
  return dispatch => {
    const url = `https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&formatversion=2&prop=description|pageimages&titles=${query}&redirects`;
    return fetch(url)
      .then(res => res.json(), err => console.err(err))
      .then(data => {
        const page = data.query.pages[0];
        return dispatch({ type: GET_PAGE_INFO, payload: page });
      });
  };
}

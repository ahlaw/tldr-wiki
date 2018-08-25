export const HANDLE_SEARCH = 'HANDLE_SEARCH';
export const CLEAR_SUGGESTIONS = 'CLEAR_SUGGESTIONS';
export const UPDATE_SUGGESTIONS = 'UPDATE_SUGGESTIONS';

export function updateSuggestions(suggestions) {
  return {
    type: UPDATE_SUGGESTIONS,
    payload: { suggestions },
  };
}

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
    const url = `https://en.wikipedia.org/w/api.php?origin=*&action=query&list=search&format=json&srsearch=${query}`;
    return fetch(url)
      .then(res => res.json(), err => console.err(err))
      .then(data => {
        const suggestions = data.query.search.map(page => page.title);
        return dispatch(updateSuggestions(suggestions));
      });
  };
}

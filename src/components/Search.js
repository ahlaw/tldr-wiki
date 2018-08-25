import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import SearchBar from 'material-ui-search-bar';

import { onSearchChange, getSuggestions, clearSuggestions } from '../actions';

function renderInputComponent(inputProps) {
  return <SearchBar inputProps={inputProps} />;
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion, query);
  const parts = parse(suggestion, matches);

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map(
          (part, index) =>
            part.highlight ? (
              <span key={String(index)} style={{ fontWeight: 500 }}>
                {part.text}
              </span>
            ) : (
              <strong key={String(index)} style={{ fontWeight: 300 }}>
                {part.text}
              </strong>
            ),
        )}
      </div>
    </MenuItem>
  );
}

const styles = theme => ({
  root: {
    height: 250,
    flexGrow: 1,
  },
  container: {
    position: 'relative',
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  divider: {
    height: theme.spacing.unit * 2,
  },
});

const Searchbar = ({
  classes,
  searchQuery,
  searchSuggestions,
  handleSearch,
  handleSuggestionsFetchRequested,
  handleSuggestionsClearRequested,
}) => {
  const inputProps = {
    value: searchQuery,
    onChange: handleSearch,
  };

  const theme = {
    container: classes.container,
    suggestionsContainerOpen: classes.suggestionsContainerOpen,
    suggestionsList: classes.suggestionsList,
    suggestion: classes.suggestion,
  };

  return (
    <div className={classes.root}>
      <Autosuggest
        inputProps={inputProps}
        suggestions={searchSuggestions}
        onSuggestionsClearRequested={handleSuggestionsClearRequested}
        onSuggestionsFetchRequested={handleSuggestionsFetchRequested}
        getSuggestionValue={value => value}
        renderSuggestion={renderSuggestion}
        renderInputComponent={renderInputComponent}
        theme={theme}
        renderSuggestionsContainer={options => (
          <Paper {...options.containerProps} square>
            {options.children}
          </Paper>
        )}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  searchQuery: state.search.query,
  searchSuggestions: state.search.suggestions,
});

const mapDispatchToProps = dispatch => ({
  handleSearch: (event, { newValue }) => dispatch(onSearchChange(newValue)),
  handleSuggestionsFetchRequested: ({ value }) =>
    dispatch(getSuggestions(value)),
  handleSuggestionsClearRequested: () => dispatch(clearSuggestions()),
});

Searchbar.propTypes = {
  classes: PropTypes.object.isRequired,
  searchQuery: PropTypes.string.isRequired,
  searchSuggestions: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleSuggestionsFetchRequested: PropTypes.func.isRequired,
  handleSuggestionsClearRequested: PropTypes.func.isRequired,
};

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Searchbar);

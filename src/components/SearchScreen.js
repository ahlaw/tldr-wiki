import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import PageInfo from './PageInfo';
import Search from './Search';

const styles = theme => ({
  root: {
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing.unit * 4,
    },
  },
  container: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      maxWidth: '640px',
    },
  },
  article: {
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing.unit * 4,
    },
  },
});

const SearchScreen = ({ classes }) => (
  <Grid className={classes.root} container justify="center">
    <Grid
      className={classes.container}
      container
      item
      direction="column"
      justify="center"
    >
      <Grid item>
        <Search />
      </Grid>
      <Grid className={classes.article} item>
        <PageInfo />
      </Grid>
    </Grid>
  </Grid>
);

SearchScreen.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchScreen);

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Search from './Search';

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 8,
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing.unit * 16,
    },
  },
  search: {
    width: '90%',
    maxWidth: '640px',
  },
});

const HomeScreen = ({ classes }) => (
  <Grid
    className={classes.root}
    container
    direction="column"
    alignItems="center"
    justify="center"
    spacing={16}
  >
    <Grid item>
      <Typography variant="display3">TLDR Wiki</Typography>
    </Grid>
    <Grid className={classes.search} item>
      <Search />
    </Grid>
  </Grid>
);

HomeScreen.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeScreen);

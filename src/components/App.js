import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import CssBaseline from '@material-ui/core/CssBaseline';

import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';

export default () => (
  <React.Fragment>
    <CssBaseline />
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route path="/wiki/:id" component={SearchScreen} />
      <Redirect from="*" to="/" />
    </Switch>
  </React.Fragment>
);

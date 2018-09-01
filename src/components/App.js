import React from 'react';
import { Route, Switch } from 'react-router';

import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';

export default () => (
  <React.Fragment>
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route path="/:id" component={SearchScreen} />
    </Switch>
  </React.Fragment>
);

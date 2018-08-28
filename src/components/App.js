import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import PageInfo from './PageInfo';
import Search from './Search';

export default () => (
  <Switch>
    <Route exact path="/" component={Search} />
    <Route path="/wiki/:id" component={PageInfo} />
    <Redirect from="*" to="/" />
  </Switch>
);

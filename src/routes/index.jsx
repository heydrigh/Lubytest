import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import Dashboard from '../pages/dashboard';
import Following from '../pages/following';
import Followers from '../pages/followers';
import Repos from '../pages/repos';
import Details from '../pages/details';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/following" component={Following} />
    <Route path="/followers" component={Followers} />
    <Route path="/repos" component={Repos} />
    <Route path="/details/:username+" component={Details} />
  </Switch>
);

export default Routes;

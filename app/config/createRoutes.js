import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import AppContainer from '../containers/AppContainer';
import SignInContainer from '../containers/SignInContainer';
import DashboardContainer from '../containers/DashboardContainer';
import JobSearchContainer from '../containers/JobSearchContainer';
import AddJobContainer from '../containers/AddJobContainer';
import JobViewContainer from '../containers/JobViewContainer';

function createRoutes() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={SignInContainer} />
        <Route path="/dashboard" component={DashboardContainer} />
        <Route path="/jobsearch" component={JobSearchContainer} />
        <Route path="/addjob" component={AddJobContainer} />
        <Route path="/jobview" component={JobViewContainer} />
      </Route>
    </Router>
  );
}

export default createRoutes;

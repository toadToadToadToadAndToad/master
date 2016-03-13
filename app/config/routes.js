import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

/* Containers will go here */
import AppContainer from '../containers/AppContainer';
import SigninContainer from '../containers/SigninContainer';
import DashboardContainer from '../containers/DashboardContainer';
import JobSearchContainer from '../containers/JobSearchContainer';
import AddJobContainer from '../containers/AddJobContainer';
import JobViewContainer from '../containers/JobViewContainer';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}> 
      <IndexRoute component={SigninContainer} />
      <Route path="/dashboard" component={DashboardContainer} />
      <Route path="/jobsearch" component={JobSearchContainer} />
      <Route path="/addjob" component={AddJobContainer} />
      <Route path="/jobview" component={JobViewContainer} />
    </Route>
  </Router>
);

export default routes; 
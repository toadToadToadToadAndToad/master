import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Map } from 'immutable';

import reducer from './config/reducer';
import routes from './config/routes';

// the window.devToolsExtension... stuff is needed for the google
// chrome redux dev tools to work
const store = createStore(reducer, Map(),
  window.devToolsExtension ? window.devToolsExtension() : undefined
);

// fill the store with some sample data

store.dispatch({
  type: 'SET_JOBS',
  jobs: [
    { jobTitle: 'Software Engineer', company: 'Google' },
    { jobTitle: 'Front-End Developer', company: 'Apple' },
    { jobTitle: 'Hypnotoad', company: 'Facebook' }
  ]
});
store.dispatch({
  type: 'SET_EVENTS',
  events: [
    { type: 'Interview', company: 'Uber', notes: 'Be sure to wear pants.' },
    { type: 'Decision', company: 'Hack Reactor', notes: 'Bring toad demo.' },
    { type: 'Interview', company: 'Microsoft', notes: 'Entrance on west side of building' }
  ]
});
store.dispatch({
  type: 'SET_CONTACTS',
  contacts: [
    { name: 'Bobby Bob', email: 'bob@bob.com' },
    { name: 'Bob Bobby', email: 'bobby@bobby.com' },
    { name: 'Bobsons', email: 'bobsons@bobsons.com' }
  ]
});
store.dispatch({
  type: 'SET_USERINFO',
  userinfo: {
    username: 'Tommy Thompson',
    activity: 5,
    currentRoute: '/dashboard'
  }
});

ReactDOM.render((
  <Provider store={store}>
    {routes}
  </Provider>
), document.getElementById('app'));

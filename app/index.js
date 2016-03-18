import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Map } from 'immutable';

import routes from './config/routes';
import { numbersGameApp } from './config/reducer';

// the window.devToolsExtension... stuff is needed for the google
// chrome redux dev tools to work
const store = createStore(numbersGameApp, Map(),
  window.devToolsExtension ? window.devToolsExtension() : undefined
);

// fill the store with some sample data

store.dispatch({
  type: 'SET_JOBS',
  jobs: [
    { title: 'Front-End Developer', company: 'Google', type: 'Full Time', location: 'San Francisco' },
    { title: 'Bicyle Repairman', company: 'Royal Wheels', type: 'Part Time', location: 'Cambridgeshire' },
  ],
});

store.dispatch({
  type: 'SET_EVENTS',
  events: [
    { type: 'Interview', company: 'Uber', notes: 'Be sure to wear pants.' },
    { type: 'Decision', company: 'Hack Reactor', notes: 'Bring toad demo.' },
    { type: 'Interview', company: 'Microsoft', notes: 'Entrance on west side of building' },
  ],
});
store.dispatch({
  type: 'SET_CONTACTS',
  contacts: [
    { name: 'Bobby Bob', email: 'bob@bob.com' },
    { name: 'Bob Bobby', email: 'bobby@bobby.com' },
    { name: 'Bobsons', email: 'bobsons@bobsons.com' },
  ],
});
store.dispatch({
  type: 'SET_USERINFO',
  userInfo: {
    username: 'Tommy Thompson',
    activity: 5,
    currentRoute: '/dashboard',
  },
});

ReactDOM.render((
  <Provider store={store}>
    {routes}
  </Provider>
), document.getElementById('app'));

import React from 'react';
import { createStore } from 'redux';
import { Map } from 'immutable';

import numbersGameAppReducer from './reducers';
import { setJobs, setEvents } from './actions';

// the window.devToolsExtension... stuff is needed for the google
// chrome redux dev tools to work
const store = createStore(numbersGameAppReducer, Map(),
  window.devToolsExtension ? window.devToolsExtension() : undefined
);

// fill the store with some sample data

store.dispatch(setJobs([
  { title: 'Front-End Developer', company: 'Google', type: 'Full Time',
    location: 'San Francisco' },
  { title: 'Bicyle Repairman', company: 'Royal Wheels', type: 'Part Time',
    location: 'Cambridgeshire' },
]));
store.dispatch(setEvents([
  { type: 'Interview', company: 'Uber', notes: 'Be sure to wear pants.' },
  { type: 'Decision', company: 'Hack Reactor', notes: 'Bring toad demo.' },
  { type: 'Interview', company: 'Microsoft',
    notes: 'Entrance on west side of building' },
]));

export default store;

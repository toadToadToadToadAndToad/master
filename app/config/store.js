import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Map } from 'immutable';
import thunkMiddleware from 'redux-thunk';

import numbersGameAppReducer from './reducers';
import { rehydrateDb, setEvents } from './actions';

const store = createStore(
  numbersGameAppReducer,
  Map(),
  compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : undefined
  )
);

store.dispatch(setEvents([
  { type: 'Interview', company: 'Uber', notes: 'Be sure to wear pants.' },
  { type: 'Decision', company: 'Hack Reactor', notes: 'Bring toad demo.' },
  { type: 'Interview', company: 'Microsoft',
    notes: 'Entrance on west side of building' },
]));

export default store;

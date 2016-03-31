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
    applyMiddleware(thunkMiddleware)
    // window.devToolsExtension ? window.devToolsExtension() : undefined
  )
);

// store.dispatch(setEvents([
//   { date: 'Monday', text: 'Be sure to wear pants.' },
//   { date: 'Tuesday', text: 'Bring toad demo.' },
//   { date: 'Wednesday', text: 'Microsoft' }, { date: 'Thurs', text: 'hi' }, { date: 'Fro', text: 'again' }
// ]));

export default store;

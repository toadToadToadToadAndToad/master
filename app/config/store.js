import { createStore, applyMiddleware, compose } from 'redux';
import { Map } from 'immutable';
import thunkMiddleware from 'redux-thunk';

import numbersGameAppReducer from './reducers';

const store = createStore(
  numbersGameAppReducer,
  Map(),
  compose(
    applyMiddleware(thunkMiddleware)
    // uncomment to use redux dev tool in google chrome
    // window.devToolsExtension ? window.devToolsExtension() : undefined
  )
);

export default store;

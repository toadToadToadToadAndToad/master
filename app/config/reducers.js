import { Map, List } from 'immutable';
import { combineReducers } from 'redux-immutable';

import * as types from './actionTypes';

/*
 * db
 */
const initialDbState = Map({
  isWorking: false,
  error: null,
});

function db(state = initialDbState, action) {
  switch (action.type) {
    case types.ADD_DB_REQUEST:
      return state.merge(Map({
        isWorking: true,
        error: null,
      }));
    case types.ADD_DB_SUCCESS:
      return state.merge(Map({
        isWorking: false,
        error: null,
      }));
    case types.ADD_DB_FAILURE:
      return state.merge(Map({
        isWorking: false,
        error: action.error,
      }));
    default:
      return state;
  }
}

/*
 * jobs
 */
function jobs(state = List(), action) {
  switch (action.type) {
    case types.SET_JOBS:
      return List(action.jobs.map((job) => Map(job)));
    case types.ADD_JOB_SUCCESS:
      return state.update(jobs => jobs.push(Map(action.job)));
    default:
      return state;
  }
}

/*
 * events
 */
function events(state = List(), action) {
  switch (action.type) {
    case types.SET_EVENTS:
      return List(action.events.map((event) => Map(event)));
    case types.ADD_EVENT:
      return state.update(events => events.push(Map(action.event)));
    // case types.UPDATE_EVENT:
    // case types.DELETE_EVENT:
    default:
      return state;
  }
}

/*
 * contacts
 */
function contactsReducer(state = List(), action) {
  switch (action.type) {
    case types.SET_CONTACTS:
      return List(action.contacts.map((contact) => Map(contact)));
    case types.ADD_CONTACT:
      return state.update(contacts => contacts.push(Map(action.contact)));
    case types.UPDATE_CONTACT:
    case types.DELETE_CONTACT:
    default:
      return state;
  }
}

/*
 * userInfo
 */
function userInfoReducer(state = Map(), action) {
  switch (action.type) {
    case types.SET_USERINFO:
    default:
      return state;
  }
}

const numbersGameAppReducer = combineReducers({
  db,
  jobs,
  events,
  contactsReducer,
  userInfoReducer,
});

export default numbersGameAppReducer;

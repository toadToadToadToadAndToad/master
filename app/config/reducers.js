import { Map, List } from 'immutable';
import { combineReducers } from 'redux-immutable';

import { SET_JOBS, SET_EVENTS, SET_CONTACTS, SET_USERINFO, ADD_JOB,
  ADD_EVENT, ADD_CONTACT, DELETE_JOB, DELETE_EVENT, DELETE_CONTACT, UPDATE_JOB,
  UPDATE_EVENT, UPDATE_CONTACT } from './actions';

// jobs
function jobs(state = List(), action) {
  switch (action.type) {
    case SET_JOBS:
      return List(action.jobs.map((job) => Map(job)));
    case ADD_JOB:
      return state.update(jobs => jobs.push(Map(action.job)));
    case UPDATE_JOB:
    case DELETE_JOB:
    default:
      return state;

  }
}

// events
function events(state = List(), action) {
  switch (action.type) {
    case SET_EVENTS:
      return List(action.events.map((event) => Map(event)));
    case ADD_EVENT:
      return state.update(events => events.push(Map(action.event)));
    case UPDATE_EVENT:
    case DELETE_EVENT:
    default:
      return state;
  }
}

// contacts
function contactsReducer(state = List(), action) {
  switch (action.type) {
    case SET_CONTACTS:
      return List(action.contacts.map((contact) => Map(contact)));
    case ADD_CONTACT:
      return state.update(contacts => contacts.push(Map(action.contact)));
    case UPDATE_CONTACT:
    case DELETE_CONTACT:
    default:
      return state;
  }
}

// userInfo
function userInfoReducer(state = Map(), action) {
  switch (action.type) {
    case SET_USERINFO:
    default:
      return state;
  }
}

const numbersGameAppReducer = combineReducers({
  jobs,
  events,
  contactsReducer,
  userInfoReducer,
});

export default numbersGameAppReducer;

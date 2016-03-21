import { Map, List } from 'immutable';
import { combineReducers } from 'redux-immutable';

import * as types from './actionTypes';

/*
 * jobs
 */
const initialJobsState = Map({
  isWorking: false,
  error: null,
  jobsList: List(),
});

function jobs(state = initialJobsState, action) {
  switch (action.type) {

    case types.SET_JOBS:
      return state.update('jobsList',
        jobsList => List(action.jobs.map((job) => Map(job))));

    case types.ADD_JOB_REQUEST:
      console.log('case ADD_JOB_REQUEST', action.job);
      return state.merge(Map({
        isWorking: true,
        error: null,
      }));
    case types.ADD_JOB_SUCCESS:
      console.log('case ADD_JOB_SUCCESS', action.job);
      return state.merge(Map({
        isWorking: false,
        error: null,
        jobsList: jobsList => jobsList.push(Map(action.job)),
      }));
    case types.ADD_JOB_FAILURE:
      console.log('ADD_JOB_FAILURE', action.error);
      return state.merge(Map({
        isWorking: false,
        error: action.error,
      }));

    // case types.UPDATE_JOB:
    // case types.DELETE_JOB:
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
  jobs,
  events,
  contactsReducer,
  userInfoReducer,
});

export default numbersGameAppReducer;

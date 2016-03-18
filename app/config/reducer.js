import { Map, List } from 'immutable';
import { combineReducers } from 'redux-immutable';

import { SET_STATE, SET_JOBS, SET_EVENTS, SET_CONTACTS, SET_USERINFO, ADD_JOB,
  ADD_EVENT, ADD_CONTACT, DELETE_JOB, DELETE_EVENT, DELETE_CONTACT, UPDATE_JOB,
  UPDATE_EVENT, UPDATE_CONTACT } from './actions';

export const numbersGameApp = combineReducers({
  jobs,
  events
  // contacts,
  // userInfo
});

function jobs(state = List(), action) {
  switch (action.type) {
    case SET_JOBS:
      return List(action.jobs.map((job) => {
        return Map(job);
      }));
    case ADD_JOB:
      return state.update(jobs => jobs.push(Map(action.job)));
    case UPDATE_JOB:
    case DELETE_JOB:
    default:
      return state;

  }
}

function events(state = List(), action) {
  switch (action.type) {
    case SET_EVENTS:
      return List(action.events.map((event) => {
        return Map(event);
      }));
    default:
      return state;
  }
}

// export default function numberGameApp(state = Map(), action) {
//
//   switch (action.type) {
//
//     // set entire collections
//
//     case SET_STATE:
//       return state.merge(action.state);
//     case SET_JOBS:
//       return state.set('jobs', List(action.jobs.map((job) => {
//         return Map(job);
//       })));
//     case SET_EVENTS:
//       return state.set('events', List(action.events.map((event) => {
//         return Map(event);
//       })));
//     case SET_CONTACTS:
//       return state.set('contacts', List(action.contacts.map((contact) => {
//         return Map(contact);
//       })));
//     case SET_USERINFO:
//       return state.set('userInfo', Map(action.userInfo));
//
//     // add individual items to collections
//
//     case ADD_JOB:
//       return state.update('jobs',
//         jobs => jobs.push(Map(action.job)));
//     case ADD_EVENT:
//       return state.update('events',
//         events => events.push(Map(action.event)));
//     case ADD_CONTACT:
//       return state.update('contacts',
//         contacts => contacts.push(Map(action.contact)));
//
//     // delete individual items from collections
//
//     case DELETE_JOB:
//     case DELETE_EVENT:
//     case DELETE_CONTACT:
//
//     // upate individual item in a collection
//
//     case UPDATE_JOB:
//     case UPDATE_EVENT:
//     case UPDATE_CONTACT:
//
//     default:
//       return state;
//   }
// }

export default numbersGameApp;

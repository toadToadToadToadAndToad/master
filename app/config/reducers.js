import { Map, List } from 'immutable';
import { combineReducers } from 'redux-immutable';

import * as types from './actionTypes';

/*
* app
*/
const initialAppState = Map({
  currentJob: null,
  dbUserID: null,
});

function app(state = initialAppState, action) {
  switch (action.type) {
    case types.SET_CURRENT_JOB:
      return state.merge(Map({
        currentJob: action.id,
      }));
    case types.SET_USERINFO:
      return state.merge(Map({
        dbUserID: action.id,
      }));
    default:
      return state;
  }
}

/*
 * db
 */
const initialDbState = Map({
  isWorking: false,
  error: null,
});

function db(state = initialDbState, action) {
  switch (action.type) {
    case types.DB_REQUEST:
      return state.merge(Map({
        isWorking: true,
        error: null,
      }));
    case types.DB_SUCCESS:
      return state.merge(Map({
        isWorking: false,
        error: null,
      }));
    case types.DB_FAILURE:
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
    case types.DELETE_JOB_SUCCESS:
      var idx;
      state.forEach(function(job, i) {
        // Note: job is a Map object, so needed to use job.get("id") to access id
        if (job.get("id") === action.jobID){
          idx = i;
        }
      });
      return state.delete(idx);
    case types.ADD_NOTE_SUCCESS:
      state.forEach(function(job){
        if(job.get("id") === action.jobID){
          job.get("notes").push(action.text.text);
        }
      });
    // case types.DELETE_NOTE_SUCCESS: 
    //   state.forEach(function(job){
    //     if(job.get("id") === action.jobID){
    //       job.get("notes").slice(0, action.noteIndex)
    //       .concat(job.get("notes")
    //       .slice(action.noteIndex + 1))
    //     }
    //   });
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
      console.log("Inside of add_event in reducer ", action.event);
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
function contacts(state = List(), action) {
  switch (action.type) {
    case types.SET_CONTACTS:
      return List(action.events.map((event) => Map(event)));
    case types.ADD_CONTACT:
      return state.update(contacts => contacts.push(Map(action.contact)));
    case types.UPDATE_CONTACT:
    case types.DELETE_CONTACT:
    default:
      return state;
  }
}

/*
 * notes
 */
function notes(state = List(), action) {
  switch (action.type) {
    case types.ADD_NOTE_SUCCESS:
      //return
    case types.DELETE_NOTE:
      //return
    case types.EDIT_NOTE:
      //return
    default:
      return state;
  }
}

const numbersGameAppReducer = combineReducers({
  app,
  db,
  jobs,
  events,
  contacts,
  // notes
});

export default numbersGameAppReducer;

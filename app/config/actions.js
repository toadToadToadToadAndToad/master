import axios from 'axios';
import * as types from './actionTypes';

/*
 * rethinkdb urls
 */
const jobUrl = 'http://localhost:3000/api/jobs/';

/*
 * state
 */
export function setState(state) {
  return { type: types.SET_STATE, state };
}

/*
 * db
 */
export function addDbRequest() {
  return { type: types.ADD_DB_REQUEST };
}
export function addDbSuccess() {
  return { type: types.ADD_DB_SUCCESS };
}
export function addDbFailure(error) {
  return { type: types.ADD_DB_FAILURE, error };
}
export function hydrateDb(userId) {
  return dispatch => {
    dispatch(addDbRequest());

    // or just get all of the user info at once!

    return axios.get(jobUrl)
      .then(res => dispatch(setJobs(res.data)))
      .then(axios.get(eventUrl))
      .then(res => dispatch(setEvents(res.data)))
      .then(axios.get(contactUrl))
      .then(res => dispatch(setContacts(res.data)))
      .then(axios.get(userInfoUrl))
      .then(res => {
        dispatch(setUserInfo(res.data));
        dispatch(addDbSuccess());
      })
      .catch(err => dispatch(addDbFailure(err)));
  };
}

/*
 * jobs
 */
export function setJobs(jobs) {
  return { type: types.SET_JOBS, jobs };
}
export function addJobSuccess(job) {
  return { type: types.ADD_JOB_SUCCESS, job };
}
export function addJob(job) {
  return dispatch => {
    dispatch(addDbRequest());
    return axios.post(jobUrl, job)
      .then(res => {
        dispatch(addJobSuccess(res.data));
        dispatch(addDbSuccess());
      })
      .catch(err => {
        dispatch(addDbFailure(err));
      });
  };
}
export function deleteJob(jobID) {
  return { type: types.DELETE_JOB, jobID };
}
export function updateJob(job) {
  return { type: types.UPDATE_JOB, job };
}

/*
 * events
 */
export function setEvents(events) {
  return { type: types.SET_EVENTS, events };
}
export function addEvent(event) {
  return { type: types.ADD_EVENT, event };
}
export function deleteEvent(eventID) {
  return { type: types.DELETE_EVENT, eventID };
}
export function udpateEvent(event) {
  return { type: types.UPDATE_EVENT, event };
}

/*
 * contacts
 */
export function setContacts(contacts) {
  return { type: types.SET_CONTACTS, contacts };
}
export function addContact(contact) {
  return { type: types.ADD_CONTACT, contact };
}
export function deleteContact(contactID) {
  return { type: types.DELETE_CONTACT, contactID };
}
export function udpateContact(contact) {
  return { type: types.UPDATE_CONTACT, contact };
}

/*
 * userInfo
 */
export function setUserInfo(unserInfo) {
  return { type: types.SET_USERINFO, unserInfo };
}

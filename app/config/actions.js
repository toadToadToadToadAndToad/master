import axios from 'axios';
import * as types from './actionTypes';
import store from './store';
import { toJS } from 'immutable';

/*
 * rethinkdb urls
 */
// TODO: these should probably go in a config file
const jobUrl = 'http://localhost:3000/api/jobs/';
const getJobsUrl = 'http://localhost:3000/api/getjobs/';
const deleteJobUrl = 'http://localhost:3000/api/jobs/';

 /*
 * app
 */
export function setState(state) {
  return { type: types.SET_STATE, state };
}
export function setCurrentJob(id) {
  return { type: types.SET_CURRENT_JOB, id };
}
export function setUserInfo(id) {
  return { type: types.SET_USERINFO, id };
}
export function initializeUser(id) {
  return (dispatch) => {
    dispatch(setUserInfo(id));
    dispatch(rehydrateDb(id));
  };
}

/*
 * db
 */
export function dbRequest() {
  return { type: types.DB_REQUEST };
}
export function dbSuccess() {
  return { type: types.DB_SUCCESS };
}
export function dbFailure(error) {
  return { type: types.DB_FAILURE, error };
}
export function rehydrateDb(userId) {
  return (dispatch) => {
    dispatch(dbRequest());

    return axios.get(getJobsUrl.concat(userId))
      .then(res => {
        dispatch(setJobs(res.data));
        dispatch(dbSuccess());
      })
      .catch(err => dispatch(dbFailure(err)));

    // work in progress
    // or just get all of the user info at once!
    // should really have a server-side redux store
    // TODO: this needs to be finished, one way or another
    // return axios.get(userUrl)
    //   .then(res => {
    //     dispatch(setJobs(res.data.jobs));
    //     dispatch(setEvents(res.data.events));
    //     dispatch(setContacts(res.data.contacts));
    //     dispatch(setUserInfo(res.data.userInfo));
    //     dispatch(dbSuccess());
    //   })
    //   .catch(err => dispatch(dbFailure(err)));
    //
    // or can do it this way...
    //
    // return axios.get(jobUrl)
    //   .then(res => dispatch(setJobs(res.data)))
    //   .then(axios.get(eventUrl))
    //   .then(res => dispatch(setEvents(res.data)))
    //   .then(axios.get(contactUrl))
    //   .then(res => dispatch(setContacts(res.data)))
    //   .then(axios.get(userInfoUrl))
    //   .then(res => {
    //     dispatch(setUserInfo(res.data));
    //     dispatch(dbSuccess());
    //   })
    //   .catch(err => dispatch(dbFailure(err)));
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
  return (dispatch, getState) => {
    dispatch(dbRequest());

    // add the user's db id to the job
    job.idUser = getState().get('app').toJS().dbUserID;

    return axios.post(jobUrl, job)
      .then(res => {
        dispatch(addJobSuccess(res.data));
        dispatch(dbSuccess());
      })
      .catch(err => {
        dispatch(dbFailure(err));
      });
  };
}
export function deleteJobSuccess(jobID) {
  return { type: types.DELETE_JOB_SUCCESS, jobID };
}
export function deleteJob(jobID) {
  return (dispatch, getState) => {
    dispatch(dbRequest());

    return axios.delete(deleteJobUrl.concat(jobID))
      .then(res => {
        dispatch(deleteJobSuccess(jobID));
        dispatch(dbSuccess());
      })
      .catch(err => {
        dispatch(dbFailure(err));
      });
  };
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

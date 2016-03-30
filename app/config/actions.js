import axios from 'axios';
import * as types from './actionTypes';
import { toJS } from 'immutable';

/*
 * rethinkdb urls
 */
// TODO: these should probably go in a config file
const jobUrl = '/api/jobs/';
const getJobsUrl = '/api/getjobs/';
const deleteJobUrl = '/api/jobs/';
const deleteNoteUrl = '/api/deletenote/';

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
  job.notes = [];
  job.contacts = [];
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
  return (dispatch) => {
    dispatch(dbRequest());

    return axios.delete(deleteJobUrl.concat(jobID))
      .then(res => {
        dispatch(deleteJobSuccess(jobID));
        dispatch(dbSuccess(res));
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
export function addContactSuccess(contactObj, jobID) {
  return { type: types.ADD_CONTACT, contactObj, jobID };
}
export function addContact(contact, jobID) {
  return (dispatch) => {
    dispatch(dbRequest());
    return axios.post('/api/addcontact', { text: contact, jobID })
      .then(response => {
        dispatch(addContactSuccess(contact, jobID));
        dispatch(dbSuccess(response));
      }).catch(err => {
        dispatch(dbFailure(err));
      });
  };
}
export function deleteContact(contactID) {
  return { type: types.DELETE_CONTACT, contactID };
}
export function udpateContact(contact) {
  return { type: types.UPDATE_CONTACT, contact };
}

/*
 * notes
 */
export function addNoteSuccess(text, jobID) {
  return { type: types.ADD_NOTE_SUCCESS, text, jobID };
}
export function addNote(text, jobID) {
  return (dispatch) => {
    dispatch(dbRequest());
    return axios.post('/api/addnote', { text, jobID })
      .then(response => {
        dispatch(addNoteSuccess(text, jobID));
        dispatch(dbSuccess(response));
      }).catch(err => {
        dispatch(dbFailure(err));
      });
  };
}
export function deleteNoteSuccess(jobID, noteIndex) {
  return { type: types.DELETE_NOTE_SUCCESS, jobID, noteIndex };
}
export function deleteNote(jobID, noteIndex) {
  return (dispatch) => {
    dispatch(dbRequest());
    return axios.delete(deleteNoteUrl.concat(jobID, '/', noteIndex))
      .then(res => {
        dispatch(deleteNoteSuccess(jobID, noteIndex));
        dispatch(dbSuccess(res));
      })
      .catch(err => {
        dispatch(dbFailure(err));
      });
  };
}
export function editNote(userID, jobID) {
  return { type: types.EDIT_NOTE, userID, jobID };
}

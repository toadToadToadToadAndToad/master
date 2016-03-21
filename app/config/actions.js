import axios from 'axios';
import request from 'superagent';
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
 * jobs
 */
export function setJobs(jobs) {
  return { type: types.SET_JOBS, jobs };
}
export function addJobRequest(job) {
  console.log('addJobRequest');
  return { type: types.ADD_JOB_REQUEST, job };
}
export function addJobSuccess(job) {
  return { type: types.ADD_JOB_SUCCESS, job };
}
export function addJobFailure(error) {
  return { type: types.ADD_JOB_FAILURE, error };
}
export function addJob(job) {
  return function(dispatch) {
    dispatch(addJobRequest(job));

    // return request
    //   .post(jobUrl)
    //   .send(job)
    //   .set('Accept', 'application/json')
    //   .end((err, res) => {
    //     if (err) {
    //       dispatch(addJobFailure(err, event));
    //     } else {
    //       dispatch(addJobSuccess(res.body));
    //     }
    //   });
    return axios.post(jobUrl, job)
      .then(function(res) {
        console.log('addJob RES: ', res.data);
        dispatch(addJobSuccess(res.data));
      })
      .catch(function(err) {
        console.log('addJob ERR: ', err);
        dispatch(addJobFailure(err, job));
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
  console.log('setEvents');
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

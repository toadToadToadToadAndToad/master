/*
 * action types
 */

// state
export const SET_STATE = 'SET_STATE';

// jobs
export const SET_JOBS = 'SET_JOBS';
export const ADD_JOB = 'ADD_JOB';
export const DELETE_JOB = 'DELETE_JOB';
export const UPDATE_JOB = 'UPDATE_JOB';

// events
export const SET_EVENTS = 'SET_EVENTS';
export const ADD_EVENT = 'ADD_EVENT';
export const DELETE_EVENT = 'DELETE_EVENT';
export const UPDATE_EVENT = 'UPDATE_EVENT';

// contacts
export const SET_CONTACTS = 'SET_CONTACTS';
export const ADD_CONTACT = 'ADD_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';
export const UPDATE_CONTACT = 'UPDATE_CONTACT';

// userInfo
export const SET_USERINFO = 'SET_USERINFO';



/*
 * action creators
 */

// state
export function setState(state) {
  return { type: SET_STATE, state }
}

// jobs
export function setJobs(jobs) {
  return { type: SET_JOBS, jobs }
}
export function addJob(job) {
  return { type: ADD_JOB, job }
}
export function deleteJob(jobID) {
  return { type: DELETE_JOB, jobID }
}
export function updateJob(job) {
  return { type: UPDATE_JOB, job }
}

// events
export function setEvents(events) {
  return { type: SET_EVENTS, events }
}
export function addEvent(event) {
  return { type: ADD_EVENT, event }
}
export function deleteEvent(eventID) {
  return { type: DELETE_EVENT, eventID }
}
export function udpateEvent(event) {
  return { type: UPDATE_EVENT, event }
}

// contacts
export function setContacts(contacts) {
  return { type: SET_CONTACTS, contacts }
}
export function addContact(contact) {
  return { type: ADD_CONTACT, contact }
}
export function deleteContact(contactID) {
  return { type: DELETE_CONTACT, contactID }
}
export function udpateContact(contact) {
  return { type: UPDATE_CONTACT, contact }
}

// userInfo
export function setUserInfo(unserInfo) {
  return { type: SET_USERINFO, unserInfo }
}

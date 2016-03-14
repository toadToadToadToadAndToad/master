import { List, Map } from 'immutable';

// setters to load initial data into redux store

export function setJobs(state, jobs) {
  return state.set('jobs', List(jobs));
}
export function setEvents(state, events) {
  return state.set('events', List(events));
}
export function setContacts(state, contacts) {
  return state.set('contacts', List(contacts));
}
export function setUserInfo(state, userInfo) {
  return state.set('userInfo', Map(userInfo));
}

export function addjob(currentState, job) {
  return currentState.update('jobs', jobs => jobs.push(Map(job)));
}
export function addEvent(currentState, event) {
  return currentState.update('events', events => events.push(Map(event)));
}
export function addContact(currentState, contact) {
  return currentState.update('contacts', contacts => contacts.push(Map(contact)));
}

export function deleteJob(currentState, job) {
}
export function deleteEvent(currentState, event) {
}
export function deleteContact(currentState, contact) {
}

export function updateJob(currentState, job) {
}
export function updateEvent(currentState, event) {
}
export function updateContact(currentState, contact) {
}

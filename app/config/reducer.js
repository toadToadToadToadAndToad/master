import { Map } from 'immutable';
import * as coreFuncs from './core';

export default function reducer(state = Map(), action) {

  switch (action.type) {

    case 'SET_JOBS':
      return coreFuncs.setJobs(state, action.jobs);
    case 'SET_EVENTS':
      return coreFuncs.setEvents(state, action.events);
    case 'SET_CONTACTS':
      return coreFuncs.setContacts(state, action.contacts);
    case 'SET_USERINFO':
      return coreFuncs.setUserInfo(state, action.userinfo);

    case 'ADD_JOB':
      return coreFuncs.addJob(state, action.job);
    case 'ADD_EVENT':
      return coreFuncs.addEvent(state, action.event);
    case 'ADD_CONTACT':
      return coreFuncs.addContact(state, action.contact);

    case 'DELETE_JOB':
      return coreFuncs.deleteJob(state, action.job);
    case 'DELETE_EVENT':
      return coreFuncs.deleteEvent(state, action.event);
    case 'DELETE_CONTACT':
      return coreFuncs.deleteContact(state, action.contact);

    case 'UPDATE_JOB':
      return coreFuncs.updateJob(state, action.job);
    case 'UPDATE_EVENT':
      return coreFuncs.updateEvent(state, action.event);
    case 'UPDATE_CONTACT':
      return coreFuncs.updateContact(state, action.contact);

    default:
      return state;
  }
}

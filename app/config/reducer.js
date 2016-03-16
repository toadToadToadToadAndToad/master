import { Map, List } from 'immutable';

export default function reducer(state = Map(), action) {

  switch (action.type) {

    // set entire collections

    case 'SET_STATE':
      return state.merge(action.state);
    case 'SET_JOBS':
      return state.set('jobs', List(action.jobs.map((job) => {
        return Map(job);
      })));
    case 'SET_EVENTS':
      return state.set('events', List(action.events.map((event) => {
        return Map(event);
      })));
    case 'SET_CONTACTS':
      return state.set('contacts', List(action.contacts.map((contact) => {
        return Map(contact);
      })));
    case 'SET_USERINFO':
      return state.set('userInfo', Map(action.userInfo));

    // add individual items to collections

    case 'ADD_JOB':
      return state.update('jobs',
        jobs => jobs.push(Map(action.job)));
    case 'ADD_EVENT':
      return state.update('events',
        events => events.push(Map(action.event)));
    case 'ADD_CONTACT':
      return state.update('contacts',
        contacts => contacts.push(Map(action.contact)));

    // delete individual items from collections

    case 'DELETE_JOB':
    case 'DELETE_EVENT':
    case 'DELETE_CONTACT':

    // upate individual item in a collection

    case 'UPDATE_JOB':
    case 'UPDATE_EVENT':
    case 'UPDATE_CONTACT':

    default:
      return state;
  }
}

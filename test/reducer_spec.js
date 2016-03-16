import { List, Map, fromJS } from 'immutable';
import reducer from '../app/config/reducer';

describe('reducer', () => {

  it('handles SET_STATE', () => {
    const initialState = Map();
    const action = {
      type: 'SET_STATE',
      state: {
        jobs: [
          { jobTitle: 'Software Engineer', company: 'Google'},
          { jobTitle: 'Front-End Developer', company: 'Apple'},
          { jobTitle: 'Hypnotoad', company: 'Facebook'}
        ],
        events: [
          { type: 'Interview', company: 'Uber', notes: 'Be sure to wear pants.'},
          { type: 'Decision', company: 'Hack Reactor', notes: 'Bring toad demo.'},
          { type: 'Interview', company: 'Microsoft', notes: 'Entrance on west side of building'}
        ],
        contacts: [
          { name: 'Bobby Bob', email: 'bob@bob.com'},
          { name: 'Bob Bobby', email: 'bobby@bobby.com'},
          { name: 'Bobsons', email: 'bobsons@bobsons.com'}
        ],
        userinfo: {
          username: 'Tommy Thompson',
          activity: 5,
          currentRoute: '/dashboard'
        }
      }
    };

    const nextState = reducer(initialState, action);

    nextState.should.equal(fromJS({
      jobs: [
        { jobTitle: 'Software Engineer', company: 'Google'},
        { jobTitle: 'Front-End Developer', company: 'Apple'},
        { jobTitle: 'Hypnotoad', company: 'Facebook'}
      ],
      events: [
        { type: 'Interview', company: 'Uber', notes: 'Be sure to wear pants.'},
        { type: 'Decision', company: 'Hack Reactor', notes: 'Bring toad demo.'},
        { type: 'Interview', company: 'Microsoft', notes: 'Entrance on west side of building'}
      ],
      contacts: [
        { name: 'Bobby Bob', email: 'bob@bob.com'},
        { name: 'Bob Bobby', email: 'bobby@bobby.com'},
        { name: 'Bobsons', email: 'bobsons@bobsons.com'}
      ],
      userinfo: {
        username: 'Tommy Thompson',
        activity: 5,
        currentRoute: '/dashboard'
      }
    }));
  });

  it('handles SET_JOBS', () => {
    const initialState = Map();
    const action = {
      type: 'SET_JOBS',
      jobs: [
        { jobTitle: 'Software Engineer', company: 'Google' },
        { jobTitle: 'Front-End Developer', company: 'Apple' },
        { jobTitle: 'Hypnotoad', company: 'Facebook' },
      ],
    };

    const nextState = reducer(initialState, action);

    nextState.should.equal(fromJS({
      jobs: [
        { jobTitle: 'Software Engineer', company: 'Google'},
        { jobTitle: 'Front-End Developer', company: 'Apple'},
        { jobTitle: 'Hypnotoad', company: 'Facebook'}
      ],
    }));
  });

  it('handles SET_EVENTS', () => {
    const initialState = Map();
    const action = {
      type: 'SET_EVENTS',
      events: [
        { type: 'Interview', company: 'Uber', notes: 'Be sure to wear pants.' },
        { type: 'Decision', company: 'Hack Reactor', notes: 'Bring toad demo.' },
        { type: 'Interview', company: 'Microsoft', notes: 'Entrance on west side of building' },
      ],
    };

    const nextState = reducer(initialState, action);

    nextState.should.equal(fromJS({
      events: [
        { type: 'Interview', company: 'Uber', notes: 'Be sure to wear pants.' },
        { type: 'Decision', company: 'Hack Reactor', notes: 'Bring toad demo.' },
        { type: 'Interview', company: 'Microsoft', notes: 'Entrance on west side of building' },
      ],
    }));
  });




});

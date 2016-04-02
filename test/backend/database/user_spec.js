'use strict';

const r = require('rethinkdb');
const chai = require('chai');
const request = require('request');
const expect = chai.expect;

describe('User Controller Methods Testing', () => {
  let connection = null;
  before((done) => {
    r.connect({ host: 'localhost', port: 28015, db: 'test' }, (err, conn) => {
      if (err) throw err;
      connection = conn;
    });
    done();
  });

  it('Should add a new user to the database', (done) => {
    request({ method: 'POST',
              url: 'http://localhost:3000/api/users',
              json: { username: 'melissa', email: 'ing@melissa.com', password: 'ex' },
    }, () => {
      let promise = r.db('test').table('User').run(connection, (err, user) => {
        if (err) throw err;
        expect(user).to.equal({ username: 'melissa', email: 'ing@melissa.com', password: 'ex' });
      });
      done();
    });
  });
});

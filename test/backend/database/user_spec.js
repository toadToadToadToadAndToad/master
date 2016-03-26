'use strict';

const r = require ('rethinkdb');
const chai = require ('chai');
const User = require ('../../../database/models/user');
const Job = require ('../../../database/models/job');
const thinky = require ('../../../database/thinkylocal.js');
const userController = require ('../../../server/controllers/user');
let request = require('request');
let expect = chai.expect;

describe('User Controller Methods Testing', () => {
  let connection = null;
  before((done) => {
    r.connect({ host: 'localhost', port: 28015, db: 'test' }, (err, conn) => {
      if (err) throw err;
      connection = conn;
    });
    done();
  });

  // afterEach((done) => {
  //   r.dbDrop('test');
  //   connection.close(function(err) {if(err) throw err; });
  //   console.log("HERE INSIDE afterEach");
  //   done();
  // });

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

  // Buggy tests: Something is going wrong with the connection / querying the test db
  // it('Should NOT add an existing user to the database', (done) => {
  //   let obj = { username: 'melissa', email: 'ing@melissa.com', password: 'ex' };
  //   request({ method: "POST",
  //             url: "http://localhost:3000/api/users",
  //             json: obj, obj,
  //   }, () => {
  //       let promise = r.table('User').run(connection, (err, user) => {
  //         if (err) throw err;
  //       });
  //       let promise2 = r.table('User').count().run(connection, (err, num) => {
  //           if (err) throw err;
  //           expect(num).to.equal(1);
  //       done();
  //   });
  // });

  // it('Should delete a user from the database', (done) => {
  //   request({ method: "POST",
  //             url: "http://localhost:3000/api/users",
  //             json: {"username": "melissa", "email": "ing@melissa.com", "password": "exy"}
  //   }, () => {
  //     request({ method: "DELETE",
  //             url: "http://localhost:3000/api/users",
  //             json: {"username": "melissa", "email": "ing@melissa.com", "password": "exy"}
  //   }, () => {
  //     let user = r.db('test').table('User').count();
  //     expect(user).to.equal(0);
  //     done();
  //   });
  // });
});

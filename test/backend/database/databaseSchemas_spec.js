'use strict';

const r = require ('rethinkdb');
const chai = require ('chai');
const User = require ('../../../database/models/user');
const Job = require ('../../../database/models/job');
const thinky = require ('../../../database/thinkylocal.js');

let expect = chai.expect;

describe('Database Model Testing', () => {
  // Did NOT end up needed these for tests below, but may need for future db tests
  // beforeEach((done) => {
  //   let connection = null;
  //   r.connect({ host: 'localhost', port: 28015, db: 'test', }, (err, conn) => {
  //     if (err) throw err;
  //     connection = conn;
  //   });
  //   done();
  // });

  // afterEach(() => {
  //   r.dbDrop('test');
  // });

  it('should create a user', () => {
    var user = new User({});
    expect(user).to.be.a('object');
  });

  it('should store passed properties when instantiated', () => {
    const username = 'bsmith';
    const email = 'bsmith@io.io';
    const password = 'fjalskdjf';
    const user = new User ({ username, email, password });
    expect(user.username).to.equal('bsmith');
    expect(user.email).to.equal('bsmith@io.io');
    expect(user.password).to.equal('fjalskdjf');
  });

  it('should create a job', () => {
    const job = new Job({});
    expect(job).to.be.a('object');
  });

  it('should store passed properties when instantiated', () => {
    const title = 'Junior Dev';
    const company = 'Github Inc.';
    const job = new Job({ title, company });
    expect(job.title).to.equal('Junior Dev');
    expect(job.company).to.equal('Github Inc.');
  });
});

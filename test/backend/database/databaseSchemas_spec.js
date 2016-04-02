'use strict';

const chai = require('chai');
const User = require('../../../database/models/user');
const Job = require('../../../database/models/job');

const expect = chai.expect;

describe('Database Model Testing', () => {
  it('should create a user', () => {
    const user = new User({});
    expect(user).to.be.a('object');
  });

  it('should store passed properties when instantiated', () => {
    const username = 'bsmith';
    const email = 'bsmith@io.io';
    const password = 'fjalskdjf';
    const user = new User({ username, email, password });
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

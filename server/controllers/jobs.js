'use strict'

const axios = require('axios');
const Job = require('../../database/models/job');
const parse = require('co-body');
const http = require('http');
const r = require('rethinkdb');

module.exports.list = function*(next) {
  let queryString = '?description=' +this.params.keywords
  if (this.params.city){
    queryString+='&location=' + this.params.city
  }
  console.log('queryString', queryString);
  const jobs = yield axios.get('https://jobs.github.com/positions.json'+ queryString);
  this.body = jobs;
  this.status = 200;
};

module.exports.addJob = function* (next) {
  this.type = 'application/json';
  try {
    const jobData = yield parse(this);
    const job = new Job(jobData);
    yield job.save();
  } catch (e) {
    this.status = 500;
    this.body = e.message || http.STATUS_CODES[this.status];
  }
  yield next;
};

module.exports.deleteJob = function* (next) {
  try {
    const jobToDelete = yield parse(this);
    if ((jobToDelete === null) || (jobToDelete.id === null)) {
      throw new Error('The job must have a field "id".');
    }
    yield Job.get(jobToDelete.id).delete().run();
    console.log('Job deleted sucessfully.');
  } catch (e) {
    console.log('Sorry, could not find a job with that id.');
    this.status = 500;
    this.body = e.message || http.STATUS_CODES[this.status];
  }
  yield next;
};

module.exports.updateJob = function* (next) {
  try {
    // Would have to send id of job wanted to edit in
    const dataToUpdate = yield parse(this);
    const updatedJob = yield Job.get(dataToUpdate.id).run();
    yield updatedJob.merge(dataToUpdate).save();
    console.log('Sucessfully updated Job');
  } catch (e) {
    console.log('Could not update job');
    this.status = 500;
    this.body = e.message || http.STATUS_CODES[this.status];
  }
  yield next;
};

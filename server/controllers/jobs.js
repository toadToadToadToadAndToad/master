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
  const jobs = yield axios.get('https://jobs.github.com/positions.json'+queryString);
  this.body = jobs;
  this.status = 200;
};

module.exports.addJob = function* (next) {
  this.type = 'application/json';
  try {
    const jobData = yield parse(this);
    const job = new Job(jobData);
    console.log("job is ", job.id);

    //Check to see if job already exists
 
    const existing = yield Job.filter({ id: job.id }).limit(1).run();
    if (existing.length !== 0) {
      // throw and error
      throw new Error('Job already in database');
    }
    

    // Otherwise, save the job to the table
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
    console.log("job Id is ", jobToDelete.id);
    const result = yield Job.get(jobToDelete.id)
                             .delete().run();
    console.log('Job deleted sucessfully.');
    // this.body = '';
  } catch (e) {
    this.status = 500;
    this.body = e.message || http.STATUS_CODES[this.status];
  }
  yield next;
};

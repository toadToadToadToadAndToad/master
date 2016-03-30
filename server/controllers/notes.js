'use strict';
const Job = require('../../database/models/job');
const parse = require('co-body');

module.exports.addNote = function*(next){
  let note = yield parse(this);

};

module.exports.deleteNote = function*() {
  const jobID = this.params.id;
  const noteIndex = this.params.noteid;
  try {
    const job = yield Job.get(jobID).run();
    job.notes.splice(noteIndex, 1);
    yield job.save();
    this.status = 200;
  } catch (e) {
    console.error(e);
  }
};

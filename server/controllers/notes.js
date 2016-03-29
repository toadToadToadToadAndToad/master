'use strict';
const Job = require('../../database/models/job');
const parse = require('co-body');

module.exports.addNote = function*(next){
  let note = yield parse(this);
  try {
    let job = yield Job.get(note.jobID).run();
    if(job){
      job.notes.push(note.text.text);
      yield job.save();
      this.status = 200;
    }
  } catch (e) {
    console.error(e);
  }
}

module.exports.deleteNote = function*(next){
  console.log("NOTE INFO", this.params.id)
  console.log("NOTE INFO", this.params.noteid)
  this.body = "note deleted successfully";
}

'use strict';
const Job = require('../../database/models/job');
const parse = require('co-body');

module.exports.addNote = function*(next){
  let note = yield parse(this);
  console.log("JKJKJK", note)
  try {
    let job = yield Job.get(note.jobID).run();
    if(job){
      job.notes.push(note.text.noteTxt);
      yield job.save();
      this.status = 200;
    }
  } catch (e) {
    console.error(e);
  }
}

module.exports.deleteNote = function*(next){
  let jobID = this.params.id;
  let noteIndex = this.params.noteid;
  try{
    let job = yield Job.get(jobID).run();
      job.notes.splice(noteIndex, 1)
      yield job.save();
      this.status = 200;

  } catch (e) {
    console.error(e);
  }
}

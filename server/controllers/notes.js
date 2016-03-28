'use strict';
const User = require('../../database/models/user');
const Job = require('../../database/models/job');
const parse = require('co-body');

module.exports.addNote = function*(next){
  let person = yield parse(this);
  try {
    let job = yield Job.filter({
      userID: this.dbUserID,
    }).limit(1).run();
    if(job){
      console.log(job.insert({notes: person.text.text }))

      this.body = job
    }
  } catch (e) {
    console.error(e);
  }
  console.log("person", person)
}

// try {
//     // Would have to send id of job wanted to edit in
//     const dataToUpdate = yield parse(this);
//     const updatedJob = yield Job.get(dataToUpdate.id).run();
//     yield updatedJob.merge(dataToUpdate).saveAll();
//     console.log('Sucessfully updated Job');
//   } catch (e) {
//     console.error('Could not update job');
//     this.status = 500;
//     this.body = e.message || http.STATUS_CODES[this.status];
//   }
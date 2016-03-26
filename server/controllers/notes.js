'use strict';
const User = require('../../database/models/user');
const parse = require('co-body');

module.exports.addNote = function*(next){
  let person = yield parse(this);
  try {
    let note = yield User.filter({
      userID: this.dbUserID,
    }).limit(1).run();
    if(note) this.body = note
  } catch (e) {
    console.error(e);
  }
  console.log("person", person.jobID)
  // this.body = "DB REACHED!"
}

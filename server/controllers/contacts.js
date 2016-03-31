'use strict';
const Job = require('../../database/models/job');
const parse = require('co-body');

module.exports.addContact = function*(next){
  let contact = yield parse(this);
  console.log(contact)
  try {
    let job = yield Job.get(contact.jobID).run();
    if(job){
      job.contacts.push({name: contact.text.name, 
        email:contact.text.email,
        phone: contact.text.phone 
      });
      yield job.save();
      this.status = 200;
    }
  } catch (e) {
    console.error(e);
  }
}

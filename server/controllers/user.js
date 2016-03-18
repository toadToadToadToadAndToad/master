'use strict';

const User = require('../../database/models/user');
const parse = require('co-body');
const http = require('http');
const r = require('rethinkdb');

module.exports.addUser = function* (next) {
  this.type = 'application/json';
  try {
    let data = yield parse(this);
    // TODO: Hash password here: data.password = hashhhhhh
    // Create new instance of 'User' model
    const user = new User( data );

    // Check to see if user already exists
    const existing = yield User.filter({ email: user.email }).limit(1).run();

    if (existing.length !== 0) {
      // throw and error
      throw new Error('Email already taken');
    }

    // Otherwise, save the user to the table
    yield user.save();
  } catch (e) {
    this.status = 500;
    this.body = e.message || http.STATUS_CODES[this.status];
  }

  yield next;
};

module.exports.deleteUser = function* (next) {
  try {
    const user = yield parse(this);
    if ((user === null) || (user.id === null)) {
      throw new Error('The user must have a field "id".');
    }
    console.log("User Id is ", user.id);
    const result = yield User.get(user.id)
                             .delete().run();
    console.log('User deleted sucessfully.');
    // this.body = '';
  } catch (e) {
    this.status = 500;
    this.body = e.message || http.STATUS_CODES[this.status];
  }
  yield next;
};

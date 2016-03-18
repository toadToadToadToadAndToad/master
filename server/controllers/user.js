'use strict';

const User = require('../../database/models/user');
const parse = require('co-body');
const http = require('http');
const r = require('rethinkdb');

module.exports.addUser = function* (next) {
  try {
    // Create new instance of 'User' model
    // let data = yield parse(this);
    // TODO: Hash password here: data.password = hashhhhhh
    const user = new User({ username: 'test', email: 'betsy@aimee.com', password: 'hiiii' });

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
    // let user = yield parse(this);
    // if ((user === null) || (user.id === null)) {
    //     throw new Error("The user must have a field `id`.");
    // }
    // Can we do this without the this._rdbConn?  Without it, got weird Postman
    // error but it did delete it.
    // How do you write success messages in this style?
    const result = yield User.get('ccd9ebda-a96d-4c96-92b2-dbe4c7edc181')
                              .delete().run(this._rdbConn);
    // this.body = '';
  } catch (e) {
    this.status = 500;
    this.body = e.message || http.STATUS_CODES[this.status];
  }
  yield next;
};

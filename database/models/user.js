'use strict';

const thinky = require('../thinkylocal');
const type = thinky.type;
const Job = require('./job');

let User = thinky.createModel('User', {
  id: type.string(),
  username: type.string(),
  email: type.string(),
  // password: type.string(),
  userID: type.string(),
  refreshToken: type.string(),
  accessToken: type.string()
});

// TODO: Determine relationship - might need to move into another file
// circular reference error. - messed up unique id...
User.hasAndBelongsToMany(Job, 'jobs', 'id', 'id');
Job.hasAndBelongsToMany(User, 'users', 'id', 'id');

module.exports = User;

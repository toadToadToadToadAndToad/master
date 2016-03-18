'use strict';

const thinky = require('../thinkylocal');
const type = thinky.type;
const Job = require('./job');

let User = thinky.createModel('User', {
  id: type.string(),
  username: type.string(),
  email: type.string(),
  password: type.string(),
});

// TODO: Determine relationship - might need to move into another file
// circular reference error.
User.hasMany(Job, 'jobs', 'id', 'title', 'company');
Job.belongsTo(User, 'users', 'id', 'username');

module.exports = User;

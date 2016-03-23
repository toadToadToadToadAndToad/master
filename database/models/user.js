'use strict';

const thinky = require('../thinkylocal');
const type = thinky.type;

let User = thinky.createModel('User', {
  id: type.string(),
  username: type.string(),
  email: type.string(),
  userID: type.string(),
  refreshToken: type.string(),
  accessToken: type.string(),

});

module.exports = User;

// job require required here to avoid circular reference
const Job = require('./job');
User.hasMany(Job, 'jobs', 'id', 'idUser');

const User = require('../../database/models/user');
const Job = require('../../database/models/job');
const parse = require('co-body');
const http = require('http');
const r = require('rethinkdb');
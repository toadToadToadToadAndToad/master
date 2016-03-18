'use strict';

const koa = require('koa');
const serve = require('koa-static');
const router = require('koa-router')();
const path = require('path');
const r = require('rethinkdb');
const config = require('../database/config');
const job = require('./controllers/jobs');
const user = require('./controllers/user');
const parse = require('co-body');
const http = require('http');
const app = koa();

// Create a rethinkdb connection, and save it in req._rdbConn
function* createConnection(next) {
  try {
    const conn = yield r.connect(config.rethinkdb);
    this._rdbConn = conn;
  } catch (err) {
    this.status = 500;
    this.body = err.message || http.STATUS_CODES[this.status];
  }
  yield next;
}

// Close the RethinkDB connection
function* closeConnection(next) {
  this._rdbConn.close();
  yield next;
}

router.get('/api/jobs/:keywords/:city', job.list);
router.get('/api/jobs/:keywords', job.list);

// do i need to pass the requst on?  or does it just exist?

router.post('/api/users/', user.addUser);
router.delete('/api/users/', user.deleteUser);

app.use(createConnection);
app.use(closeConnection);
app.use(router.routes());
app.use(serve(path.join(__dirname, '../dist')));

app.listen(3000);
console.log('server running on port 3000');

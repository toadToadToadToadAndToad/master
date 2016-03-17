'use strict';

const koa = require('koa');
const serve = require('koa-static');
const router = require('koa-router')();
const path = require('path');
const job = require('./controllers/jobs');
const app = koa();
const r = require('rethinkdb');
const http = require('http');
const config = require('../database/config');
const User = require('../database/models/user');

// Create a rethinkdb connection, and save it in req._rdbConn
function* createConnection(next) {
  try {
    const conn = yield r.connect(config.rethinkdb);
    this._rdbConn = conn;
  }
  catch (err) {
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

// Database testing
console.log('This is user ', User);
const test = new User( {username: 'aimee', email: 'aimee@aimee.com', password: 'skdjf'} );
test.save().then((result) => {
  console.log('yay!', result);
}).error((error) => {
  console.log('nay!', error);
});

router.get('/api/jobs/:keywords/:city', job.list);
router.get('/api/jobs/:keywords', job.list);

app.use(createConnection);
app.use(router.routes());
app.use(serve(path.join(__dirname, '../dist')));
app.use(closeConnection);

app.listen(3000);
console.log('server running on port 3000');


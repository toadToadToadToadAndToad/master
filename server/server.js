'use strict';

const koa = require('koa');
const path = require('path');
const r = require('rethinkdb');
const config = require('../database/config');
const http = require('http');
const spa = require('koa-spa');
const session = require('koa-session');
const passport = require('./controllers/auth');
const routes = require('./routes/routes');

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

const app = koa();

app.use(createConnection);
app.keys = ['secret'];
app.use(session(app));

// // Close the RethinkDB connection
// function* closeConnection(next) {
//   this._rdbConn.close();
//   yield next;
// }
// app.use(closeConnection);

// initialize Auth must be before routes(app)
app.use(passport.initialize());
app.use(passport.session());
routes(app);

// serving up react SPA
app.use(spa(path.join(__dirname, '../dist'), {
  index: 'index.html',
  404: '404.html',
  routeBase: '/',
}));

app.listen(3000);
console.log('server running on port 3000');

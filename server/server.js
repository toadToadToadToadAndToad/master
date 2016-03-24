'use strict';

const koa = require('koa');
const router = require('koa-router')();
const path = require('path');
const r = require('rethinkdb');
const config = require('../database/config');
const http = require('http');
const spa = require('koa-spa');
const session = require('koa-session');

const job = require('./controllers/jobs');
const user = require('./controllers/user');
const passport = require('./controllers/auth');

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

// initialize Auth must be before app.use(router.routes())
app.use(passport.initialize());
app.use(passport.session());
app.use(router.routes());

// Jobsearch Routes
router.get('/api/jobs/:source/:keywords/:city', job.list);
router.get('/api/jobs/:source/:keywords', job.list);

// DB Routes
router.post('/api/users/', user.addUser);
router.delete('/api/users/', user.deleteUser);
router.post('/api/jobs/', job.addJob);
router.get('/api/getjobs/:idUser', job.getJobs);
router.delete('/api/jobs/', job.deleteJob);
router.put('/api/jobs/', job.updateJob);

// Google Authentication Routes
router.get('/auth/google', passport.authenticate('google', {
  scope: ['email', 'profile'],
  accessType: 'offline',
  approvalPrompt: 'force',
}));
router.get('/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: '/dashboard',
    failureRedirect: '/',
  })
);

// authenticating routes
function* authed(next) {
  if (this.req.isAuthenticated()) {
    yield next;
  } else {
    this.redirect('auth/google');
  }
}
router.get('/dashboard', authed, function*(next) {
  yield next;
});
router.get('/jobsearch', authed, function*(next) {
  yield next;
});
router.get('/addjob', authed, function*(next) {
  yield next;
});

// serving up react SPA
app.use(spa(path.join(__dirname, '../dist'), {
  index: 'index.html',
  404: '404.html',
  routeBase: '/',
}));

app.listen(3000);
console.log('server running on port 3000');

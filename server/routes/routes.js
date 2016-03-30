const job = require('../controllers/jobs');
const user = require('../controllers/user');
const passport = require('../controllers/auth');
const userLookup = require('../controllers/userLookup');
const notes = require('../controllers/notes');
const calendar = require('../controllers/calendar');
const router = require('koa-router')();

module.exports = function(app){

  app.use(router.routes());

  // Jobsearch Routes
  router.get('/api/jobs/:source/:keywords/:city', job.list);
  router.get('/api/jobs/:source/:keywords', job.list);

  // DB Routes
  router.delete('/api/users/', user.deleteUser);
  router.post('/api/jobs/', job.addJob);
  router.get('/api/getjobs/:idUser', job.getJobs);
  router.delete('/api/jobs/:id', job.deleteJob);
  router.put('/api/jobs/', job.updateJob);
  router.get('/api/me', userLookup.lookup);
  router.post('/api/addnote', notes.addNote)
  router.delete('/api/deletenote/:id/:noteid', notes.deleteNote)

  router.get('/calendar', calendar.addCalendar)

  // Google Authentication Routes
  router.get('/auth/google', passport.authenticate('google', {
    scope: ['email', 'profile','https://www.googleapis.com/auth/calendar'],
    accessType: 'offline',
    approvalPrompt: 'force',
  }));
  router.get('/auth/google/callback',
    passport.authenticate('google', {
      successRedirect: '/dashboard',
      failureRedirect: '/',
    })
  );
  router.get('/logout', function*() {
    this.session = null;
    this.redirect('/');
  });

  router.get('/dashboard', authed, function*(next) {
    yield next;
  });
  router.get('/jobsearch', authed, function*(next) {
    yield next;
  });
  router.get('/addjob', authed, function*(next) {
    yield next;
  });

  // authenticating routes
  function* authed(next) {
    if (this.req.isAuthenticated()) {
      yield next;
    } else {
      this.redirect('/');
    }
  }
  app.use(passport.initialize());
  app.use(passport.session());

}
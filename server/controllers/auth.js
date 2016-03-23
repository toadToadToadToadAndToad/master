'use strict';

const passport = require('koa-passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const tokens = require('../config');
const User = require('../../database/models/user');

const currentUser = {};

passport.use(new GoogleStrategy({
  clientID: tokens.GOOGLE_CLIENT_ID,
  clientSecret: tokens.GOOGLE_CLIENT_SECRET,
  returnURL: 'http://localhost:3000/auth/google/return',
  callbackURL: 'http://localhost:3000/auth/google/callback',
},
// profile contains all the personal data returned
(accessToken, refreshToken, profile, done) => {
  const userInfo = {
    username: profile.displayName,
    email: profile.emails[0].value,
    userID: profile.id,
    refreshToken,
    accessToken,
  };
  const userToBeSaved = new User(userInfo);
  User.filter({
    userID: userToBeSaved.userID,
  }).limit(1).run()
  .then((user, err) => {
    if (err) {
      console.error('ERROR', err);
    } else if (user.length !== 0) {
      console.log('not saving user');
      return;
    } else {
      console.log('saving user');
      userToBeSaved.save();
    }
  });
  return done(null, userInfo);
}
));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

module.exports = passport;

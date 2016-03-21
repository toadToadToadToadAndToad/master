'use strict'

const passport = require('koa-passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;;
const tokens = require('../config');
const User = require('../../database/models/user');
const parse = require('co-body');
const http = require('http');
const r = require('rethinkdb');
const jwt = require('koa-jwt');

passport.use(new GoogleStrategy({
    clientID: tokens.GOOGLE_CLIENT_ID,
    clientSecret: tokens.GOOGLE_CLIENT_SECRET,
    returnURL: 'http://localhost:3000/auth/google/return',
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  //profile contains all the personal data returned   
  function (accessToken, refreshToken, profile, done) {
    let userInfo = {
      username: profile.displayName,
      email: profile.emails[0].value,
      userID: profile.id,
      refreshToken: refreshToken,
      accessToken: accessToken
    };

    const user = new User(userInfo);
    user.save();

    console.log("This is the user OBJECT", userInfo)

    return done(null, profile);
  }
));


passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

// app.use(passport.initialize());
// app.use(passport.session());

module.exports = passport; 
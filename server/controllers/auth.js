'use strict';

const passport = require('koa-passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const tokens = require('../config');
const User = require('../../database/models/user');
<<<<<<< a3521e7148447f3f6fb40bbfed9365c5e75b8e26
=======
const r = require('rethinkdb');
const jwt = require('koa-jwt');
>>>>>>> (in progress) google auth

passport.use(new GoogleStrategy({
<<<<<<< a3521e7148447f3f6fb40bbfed9365c5e75b8e26
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
=======
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
    const userToBeSaved = new User(userInfo);
    User.filter({ userID: userToBeSaved.userID }).limit(1).run().then(function(user, err){
      if(err){
        console.error("ERROR",err);
      }
      else{
        if(user.length !== 0){
          return done(err, user)
        }
        userToBeSaved.save().then(function*(user){
          return done(null, user);
        })
      }
    })
    return done(null, userToBeSaved);
  }
>>>>>>> (in progress) google auth
));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

<<<<<<< a3521e7148447f3f6fb40bbfed9365c5e75b8e26
module.exports = passport;
=======

module.exports = passport; 

>>>>>>> (in progress) google auth

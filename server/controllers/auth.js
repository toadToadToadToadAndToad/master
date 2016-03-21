'use strict'

const passport = require('koa-passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;;
const tokens = require('../config');
const User = require('../../database/models/user');
// const http = require('http');
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
    const userToBeSaved = new User(userInfo);
    User.filter({ userID: userToBeSaved.userID }).limit(1).run().then(function(user, err){
      if(err){
        console.error("ERROR",err);
      }
      else if(user.length !== 0 ){
        return;
      }else{
        userToBeSaved.save(); 
      }
    })
    return done(null, userInfo);
  }
));


passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});


module.exports = passport; 
'use strict'
const User = require('../../database/models/user');
const parse = require('co-body');

//decoding cookie and retrieving user from DB 
module.exports.lookup = function *(){
  let cookie = this.req.headers.cookie.split('=')[1];
  let cookieBuffer = new Buffer(cookie, 'base64' );
  let decodedCookie = JSON.parse(cookieBuffer.toString('utf8'));
  let findUser = decodedCookie.passport.user.userID;
  // console.log("GOT ME GOT ME GOT ME", findUser)
  yield User.filter({
    userID: findUser,
  }).limit(1).run()
  .then((user, err) => {
    if (err) {
      console.error('ERROR', err);
    }else {
      console.log("HERE IS THE USER!!!!", user);
      this.body = user;
    }
  }); 
}

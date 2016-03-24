'use strict';
const User = require('../../database/models/user');

// decoding cookie and retrieving user from DB
module.exports.lookup = function*() {
  const cookie = this.req.headers.cookie.split('=')[1];
  const cookieBuffer = new Buffer(cookie, 'base64');
  const decodedCookie = JSON.parse(cookieBuffer.toString('utf8'));
  const findUser = decodedCookie.passport.user.userID;
<<<<<<< 48f341d4499763ca220eced8d5f4a92499b2f661
  try {
    this.body = yield User.filter({
      userID: findUser,
    }).limit(1).run();
  } catch (e) {
    console.error(e);
  }
=======
  yield User.filter({
    userID: findUser,
  })
  .limit(1)
  .run()
  .then((user, err) => {
    if (err) {
      console.error('ERROR', err);
    } else {
      this.body = user;
    }
  });
>>>>>>> (fix) beautify
};

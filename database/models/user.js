import thinky from './thinkylocal.js';
const type = thinky.type;
// import Job from './job';

let User = thinky.createModel('User', {
  id: type.string(),
  username: type.string(),
  email: type.string(),
  password: type.string(),
});

// TODO: Determine relationship - might need to move into another file
// circular reference error
// User.hasMany(Job, '');

export default User;

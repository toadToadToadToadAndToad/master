import thinky from './thinkylocal';
const type = thinky.type;
import Job from './job';

let User = thinky.createModel('User', {
  id: type.string(),
  username: type.string(),
  email: type.string(),
  password: type.string(),
});

// TODO: Determine relationship - might need to move into another file
// circular reference error...1-n relation?
User.hasMany(Job, 'jobs', 'id', 'title', 'company');
Job.belongsTo(User, 'users', 'id', 'username');

export default User;

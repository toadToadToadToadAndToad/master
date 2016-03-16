import thinky from 'thinky';
let type = thinky.type;

var Job = thinky.createModel("Job", {
  id: type.string(),
  title: type.string(),
  company: type.string(),
  location: type.string()
});

var User = thinky.createModel("User", {
  id: type.string(), 
  username: type.string(),
  email: type.string(),
  password: type.string(),
});.

User.hasMany(Job, "")

export { Job, User }

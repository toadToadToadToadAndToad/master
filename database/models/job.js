import thinky from './thinkylocal.js';
const type = thinky.type;

let Job = thinky.createModel('Job', {
  id: type.string(),
  title: type.string(),
  company: type.string(),
  location: type.string(),
});

export default Job;

'use strict';

const thinky = require('../thinkylocal');
const type = thinky.type;

let Job = thinky.createModel('Job', {
  id: type.string(),
  title: type.string(),
  company: type.string(),
  location: type.string(),
  type: type.string(),
  description: type.string().max(200),
  url: type.string(),
  contact: {
    email: type.string(),
    phone: type.number(),
  },
});

module.exports = Job;

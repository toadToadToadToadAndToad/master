/* According the thinky.io documentation, you should NOT import the
module multiple times or else the instance of 'thinky' will not share the
same models.  They recommend using this architecture to solve this issue. */

const fs = require('fs');

const caCert = fs.readFileSync(__dirname + '/public-key.crt').toString().trim();

const config = require('./config');

const thinky = require('thinky');

module.exports = thinky(config.rethinkdb);

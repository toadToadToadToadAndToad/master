/* According the thinky.io documentation, you should NOT import the
module multiple times or else the instance of 'thinky' will not share the
same models.  They recommend using this architecture to solve this issue. */

// import thinky from 'thinky';

// export default thinky;

var thinky = require('thinky')();

module.exports = thinky;
/* According the thinky.io documentation, you should NOT import the
module multiple times or else the instance of 'thinky' will not share the
same models.  They recommend using this architecture to solve this issue. */

var thinky = require('thinky')();

module.exports = thinky;

//   5 | const thinky = require('thinky')();
//   6 | 
// > 7 | export thinky;
//     |        ^

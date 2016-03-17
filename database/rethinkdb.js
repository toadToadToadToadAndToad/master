/*TODO: Add to Koa server */

import thinky from './thinkylocal';

// Import Rethink
import r from 'rethinkdb';
import config from 'config.js';

// Create a rethinkdb connection - they save it in req._rdbConn
app.use(createConnection);

app.use(closeConnection);


function* createConnection(next) {
  try {
    const conn = yield r.connect(config.rethinkdb);
    this._rdbConn = conn;
  }
  catch(err) {
    this.status = 500;
    this.body = err.message || 'Could not connect to DB';
  }
  yield next;
}

/*
 * Close the RethinkDB connection
 */
function* closeConnection(next) {
    this._rdbConn.close();
}

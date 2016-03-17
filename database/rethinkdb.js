/*TODO: Add to Koa server */

//Import Rethink
import r from 'rethinkdb';
import config from 'config.js';

let connection = null;
r.connect({ host: 'localhost', port: 28015, db: 'test', }, (err, conn) => {
  if (err) throw err;
  connection = conn;
});

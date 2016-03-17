import r from 'rethinkdb';


let connection = null;
r.connect({ host: 'localhost', port: 28015, db: 'test', }, (err, conn) => {
  if (err) throw err;
  connection = conn;
});

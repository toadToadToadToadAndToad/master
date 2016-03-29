module.exports = {
  rethinkdb: {
    database: 'jobs',
    discovery: false,
    timeout: 10,
    authKey: 'WXDkgpygPhK57JELT22QmbYEw7sq9DnpRuSswcSiF4',
    servers: [{
      host: 'aws-us-east-1-portal.12.dblayer.com',
      port: 10419,
    }],
    ssl: {
      rejectUnauthorized: true,
    },
  },
  koa: {
    port: 3000,
  },
};

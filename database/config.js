module.exports = {
  rethinkdb: {
    database: 'jobs',
    authKey: 'WXDkgpygPhK57JELT22QmbYEw7sq9DnpRuSswcSiF4',
    host: 'aws-us-east-1-portal.12.dblayer.com',
    port: 10419,
    ssl: {
      ca: publicKey,
    },
  },
  koa: {
    port: 3000,
  },
};

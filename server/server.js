'use strict';

const koa = require('koa');
const serve = require('koa-static');
const router = require('koa-router')();
const path = require('path');
const job = require('./controllers/jobs');
const app = koa();

router.get('/api/jobs/:keywords/:city', job.list);
router.get('/api/jobs/:keywords', job.list);

app.use(router.routes());
app.use(serve(path.join(__dirname, '../dist')));

app.listen(3000);
console.log('server running on port 3000');

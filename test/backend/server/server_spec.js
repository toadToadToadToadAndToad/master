const path = require('path');
const expect = require('chai').expect;
const server = require(path.join(__dirname, '../../../server/server.js'));

describe('koa server', () => {
  it('koa to exists', () => {
    expect(server).to.be.a('object');
  });
});

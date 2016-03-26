var path = require('path');
var expect = require('chai').expect;
const koa = require('koa');

var server = require(path.join(__dirname, '../server/server.js'));

describe('koa server', function () {

  it('koa to exists', function () {
    expect(server).to.be.a('object');

  });

  it('does something', function () {
    expect(true).to.equal(true);
  });

  it('does something else', function () {
    expect(false).to.equal(false);
  });

  // Add more assertions here
});

const path = require('path');
const expect = require('chai').expect;
const userLookup = require(path.join(__dirname, '../../../server/controllers/userLookup.js'));

describe('User Lookup Controller', () => {
  it('User Lookup has a lookup method', () => {
    expect(userLookup.lookup).to.be.a('function');
  });
});

const path = require('path');
const expect = require('chai').expect;
const auth = require(path.join(__dirname, '../../../server/controllers/auth.js'));

describe('Auth Controller', () => {
  it('has a Passport method', () => {
    expect(auth).to.be.a('object');
  });
  it('Passport has a use method', () => {
    expect(auth.use).to.be.a('function');
  });
  it('Passport has a serializeUser method', () => {
    expect(auth.serializeUser).to.be.a('function');
  });
  it('Passport has a deserializeUser method', () => {
    expect(auth.deserializeUser).to.be.a('function');
  });
});

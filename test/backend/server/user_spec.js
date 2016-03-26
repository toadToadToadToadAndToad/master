const path = require('path');
const expect = require('chai').expect;
const user = require(path.join(__dirname, '../../../server/controllers/user.js'));

describe('User Controller', () => {
  it('User Controller has a deleteUser method', () => {
    expect(user.deleteUser).to.be.a('function');
  });
});

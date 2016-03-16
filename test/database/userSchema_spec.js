import expect from 'chai';
import User from '../../database/models/user';

describe('User Model Testing', () => {
  it('should create a user', () => {
    var user = new User();
    expect(user).to.be.a('object');
  });

   it('should store passed properties when instantiated', () => {
    const username = 'bsmtih';
    const email = 'bsmith@io.io';
    const password = 'fjalskdjf';
    const user = new User ({ username, email, password });
    user.save().then((doc) => {});
    expect(user.username).to.equal('bsmith');
    expect(user.email).to.equal('bsmith@io.io');
    expect(user.password).to.equal('fjalskdjf@');
  });
});



import r from 'rethinkdb';
import chai from 'chai';
import User from '../../database/models/user';
import Job from '../../database/models/job';
import thinky from '../../database/models/thinkylocal.js';

let expect = chai.expect;

describe('Database Model Testing', () => {

  beforeEach((done) => {
    let connection = null;
    r.connect({ host: 'localhost', port: 28015, db: 'test', }, (err, conn) => {
      if (err) throw err;
      connection = conn;
    });
    done();
  });

  afterEach(() => {
    r.dbDrop('test');
  });

  it('should create a user', () => {
    var user = new User({});
    expect(user).to.be.a('object');
  });

  it('should store passed properties when instantiated', () => {
    const username = 'bsmith';
    const email = 'bsmith@io.io';
    const password = 'fjalskdjf';
    const user = new User ({ username, email, password });
    user.save().then((doc) => {});
    expect(user.username).to.equal('bsmith');
    expect(user.email).to.equal('bsmith@io.io');
    expect(user.password).to.equal('fjalskdjf');
  });

  it('should create a job', () => {
    const job = new Job({});
    expect(job).to.be.a('object');
  });

  it('should store passed properties when instantiated', () => {
    const title = 'Junior Dev';
    const company = 'Github Inc.';
    const job = new Job({ title, company, location });
    expect(job.title).to.equal('Junior Dev');
    expect(job.company).to.equal('Github Inc.');
  });
});

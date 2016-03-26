const path = require('path');
const expect = require('chai').expect;
const jobs = require(path.join(__dirname, '../../../server/controllers/jobs.js'));

describe('Job Controller', () => {
  it('Job Controller has a list method', () => {
    expect(jobs.list).to.be.a('function');
  });

  it('Job Controller has a addJob method', () => {
    expect(jobs.addJob).to.be.a('function');
  });

  it('Job Controller has a getJobs method', () => {
    expect(jobs.getJobs).to.be.a('function');
  });

  it('Job Controller has a updateJob method', () => {
    expect(jobs.deleteJob).to.be.a('function');
  });

  it('Job Controller has a updateJob method', () => {
    expect(jobs.updateJob).to.be.a('function');
  });
});

import React from 'react';
import ReactDOM from 'react-dom';
import { renderIntoDocument } from 'react-addons-test-utils';
import JobSearchContainer from '../../app/containers/JobSearchContainer';

describe('JobSearchContainer', () => {

  it('renders into the DOM', () => {
    const component = renderIntoDocument(
      <JobSearchContainer />
    );
  });

  it('has a getJobs method', () => {
    const componet = new JobSearchContainer();
    componet.getJobs.should.exist;
  })
});

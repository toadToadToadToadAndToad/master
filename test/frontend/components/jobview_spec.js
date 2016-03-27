import React from 'react';
import { expect } from 'chai';
const TestUtils = require('react-addons-test-utils');
import Component from '../../../app/components/jobview/JobData.js';

describe('Job View Components', () => {
  it('Job should render in to virtual DOM', () => {
    const job = {
      id: '425729200',
      title: 'User Experience Architect',
      company: 'Department of Defense',
      url: 'https://www.usajobs.gov/GetJob/ViewDetails/425729200?PostingChannelID=RESTAPI',
      description: 'JOB DESCRIPTION: User Experience Architects apply user-centered design principles to build seamless, consistent, and desirable interfaces for NGA enterprise systems. They lead web-based design activities, including gathering, validating, analyzing, and defining requirements; conducting research and best practice reviews; performing user engagements and testing (e.g., interviews, site navigation); and creating prototypes. User Experience Architects create and plan interfaces that promote intuitive navigation and enhanced user workflow.',
      location: 'Saint Louis, Missouri;Springfield, Virginia',
      type: 'Full Time',
    };
    const component = <Component job={job} />;
    TestUtils.renderIntoDocument(component);
    expect(component).to.be.an('object');
  });
});

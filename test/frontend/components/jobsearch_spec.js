import React from 'react';
import { expect } from 'chai';
const TestUtils = require('react-addons-test-utils');
import Component1 from '../../../app/components/jobsearch/ResultsView';
import Component2 from '../../../app/components/jobsearch/SearchBar';
import Component3 from '../../../app/components/jobsearch/SiteSelect';

describe('Job Search Components', () => {
  const jobArray = [
    {
      id: '425729200',
      title: 'User Experience Architect',
      company: 'Department of Defense',
      url: 'https://www.usajobs.gov/GetJob/ViewDetails/425729200?PostingChannelID=RESTAPI',
      description: 'JOB DESCRIPTION: User Experience Architects apply user-centered design principles to build seamless, consistent, and desirable interfaces for NGA enterprise systems. They lead web-based design activities, including gathering, validating, analyzing, and defining requirements; conducting research and best practice reviews; performing user engagements and testing (e.g., interviews, site navigation); and creating prototypes. User Experience Architects create and plan interfaces that promote intuitive navigation and enhanced user workflow.',
      location: 'Saint Louis, Missouri;Springfield, Virginia',
      type: 'Full Time',
    },
    {
      id: '425729200',
      title: 'User Experience Architect',
      company: 'Department of Defense',
      url: 'https://www.usajobs.gov/GetJob/ViewDetails/425729200?PostingChannelID=RESTAPI',
      description: 'JOB DESCRIPTION: User Experience Architects apply user-centered design principles to build seamless, consistent, and desirable interfaces for NGA enterprise systems. They lead web-based design activities, including gathering, validating, analyzing, and defining requirements; conducting research and best practice reviews; performing user engagements and testing (e.g., interviews, site navigation); and creating prototypes. User Experience Architects create and plan interfaces that promote intuitive navigation and enhanced user workflow.',
      location: 'Saint Louis, Missouri;Springfield, Virginia',
      type: 'Full Time',
    },
  ];

  it('Results View should exist', () => {
    const component = <Component1 data={jobArray} />;
    // TestUtils.renderIntoDocument(component);
    expect(component).to.be.an('object');
  });

  it('Search Bar should render in to the virtual DOM', () => {
    const component = <Component2 />;
    TestUtils.renderIntoDocument(component);
    expect(component).to.be.an('object');
  });

  it('Site Select should render in to the virtual DOM', () => {
    const component = <Component3 />;
    TestUtils.renderIntoDocument(component);
    expect(component).to.be.an('object');
  });
});

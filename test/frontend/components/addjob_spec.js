import React from 'react';
import { expect } from 'chai';
const TestUtils = require('react-addons-test-utils');
import Component from '../../../app/components/addjob/addJob.js';

describe('Add Job Components', () => {
  it('AddJob form should render in to virtual DOM', () => {
    const component = <Component />;
    TestUtils.renderIntoDocument(component);
    expect(component).to.be.an('object');
  });
});

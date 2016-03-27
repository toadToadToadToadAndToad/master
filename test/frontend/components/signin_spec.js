import React from 'react';
import { expect } from 'chai';
const TestUtils = require('react-addons-test-utils');
import Component from '../../../app/components/signin/signin.js';

describe('Sign In Components', () => {
  it('Button should render in to virtual DOM', () => {
    const component = <Component />;
    TestUtils.renderIntoDocument(component);
    expect(component).to.be.an('object');
  });
});

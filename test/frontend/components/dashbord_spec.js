import React from 'react';
import { expect } from 'chai';
import Component1 from '../../../app/components/dashboard/EventsTableData';
import Component2 from '../../../app/components/dashboard/JobsTableData';

describe('Dashboard Components', () => {
  it('Events Table should exist', () => {
    const component = <Component1 />;
    expect(component).to.be.an('object');
  });

  it('Jobs Table should exist', () => {
    const component = <Component2 />;
    expect(component).to.be.an('object');
  });
});

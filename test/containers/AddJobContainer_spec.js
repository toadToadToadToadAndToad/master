import React from 'react';
import ReactDOM from 'react-dom';
import { renderIntoDocument } from 'react-addons-test-utils';
import AddJobContainer from '../../app/containers/AddJobContainer';

describe('AddJobContainer', () => {

  it('renders into the DOM', () => {
    const component = renderIntoDocument(
      <AddJobContainer />
    );
  });
});

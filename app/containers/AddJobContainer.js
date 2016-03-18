import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import AddJobComponent from '../components/addjob/addjob';

const handleSubmit = (event, dispatch) => {
    event.preventDefault();

    let children = event.target.children;
    let job = {
    title: children.title.value,
    company: children.company.value,
    description: children.description.value,
    type: children.type.value,
    location: children.location.value,
    url: children.location.url,
    how_to_apply: children['how-to-apply'].value
  };

  event.target.reset();
  dispatch({type: 'ADD_JOB', job: job});
}

let  AddJobContainer = ({dispatch}) => {
  return (
      <div>
        <AddJobComponent
        handleChange={((event) => handleChange(event, dispatch))}
        handleSubmit={((event) => handleSubmit(event, dispatch))} />
        <Link to="/dashboard">Back to Dashboard</Link>
      </div>
  )
};


AddJobContainer = connect()(AddJobContainer);
export default AddJobContainer;

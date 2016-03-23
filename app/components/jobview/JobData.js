import React, { PropTypes } from 'react';
import Divider from 'material-ui/lib/divider';
import Paper from 'material-ui/lib/paper';
import TextField from 'material-ui/lib/text-field';

const style = {
  marginLeft: 20,
};

const JobData = (props) => (
  <Paper zDepth={1}>
    ID: {props.job.id}
    <Divider />
    Company: {props.job.company}
    <Divider />
    Title: {props.job.title}
    <Divider />
    Location: {props.job.location}
    <Divider />
  </Paper>
);

JobData.propTypes = {
  job: PropTypes.object.isRequired,
};

export default JobData;

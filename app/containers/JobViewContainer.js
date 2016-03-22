import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/lib/raised-button';
import PageHeader from 'react-bootstrap/lib/PageHeader';


class JobViewContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <RaisedButton
          containerElement={<Link to="/dashboard" />}
          label="Dashboard"
        />
      <br /><br />
        <PageHeader>Job View</PageHeader>
        {this.props.jobID}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let jobID = undefined;
  if (state.get('app')) jobID = state.get('app').toJS().currentJob;
  return {
    jobID,
  };
};

JobViewContainer.propTypes = {
  jobID: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(JobViewContainer);

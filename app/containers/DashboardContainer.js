import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import JobsTableData from '../components/dashboard/JobsTableData';
import EventsTableData from '../components/dashboard/EventsTableData';
import RaisedButton from 'material-ui/lib/raised-button';

class DashboardContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleToggle(event, toggled) {
    this.setState({
      [event.target.name]: toggled,
    });
  }

  handleChange(event) {
    this.setState({ height: event.target.value });
  }

  // TODO: currently material-ui is buggy, so this is being called by
  // onCellClick in <JobsTableData> and <EventsTableData> where
  // it really should be called by onRowClick on a <TableRow>
  handleRowClick(event) {
    console.log('ROW CLICK:', event);
  }

  render() {
    return (
      <div>
        <RaisedButton
          containerElement={<Link to="/jobsearch" />}
          label="Job Search" />
        <br />
        <RaisedButton 
          containerElement={<Link to="/addjob" />}
          label="Add Search" />
        <br />
        <RaisedButton 
          containerElement={<Link to="/jobview" />}
          label="Job View" />
        <br />
        <br />
        <JobsTableData
          jobs={this.props.jobs}
          onRowClick={(event) => this.handleRowClick(event)}
        /><br /><br />
        <EventsTableData
          events={this.props.events}
          onRowClick={(event) => this.handleRowClick(event)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    jobs: state.get('jobs').toArray(),
    events: state.get('events').toArray(),
  };
};


DashboardContainer.propTypes = {
  jobs: PropTypes.array.isRequired,
  events: PropTypes.array.isRequired,
};

DashboardContainer = connect(mapStateToProps)(DashboardContainer);

export default DashboardContainer;

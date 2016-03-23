import React, { Component, PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import JobsTableData from '../components/dashboard/JobsTableData';
import EventsTableData from '../components/dashboard/EventsTableData';
import RaisedButton from 'material-ui/lib/raised-button';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import { toJS } from 'immutable';

import { setCurrentJob } from '../config/actions';


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
    this.props.dispatch(setCurrentJob(this.props.jobs[event].id));
    browserHistory.push('/jobview');
  }

  render() {
    // only show the table of job data if it is not empty
    let jobsTable = '';
    if (this.props.jobs.length) {
      jobsTable = (
        <JobsTableData
          jobs={this.props.jobs}
          onRowClick={(event) => this.handleRowClick(event)}
        />
      );
    }
    // only show the table of events data if it is not empty
    let eventsTable = '';
    if (this.props.events.length) {
      eventsTable = (
        <EventsTableData
          events={this.props.events}
          onRowClick={(event) => this.handleRowClick(event)}
        />
      );
    }
    return (
      <div>
        <RaisedButton
          containerElement={<Link to="/jobsearch" />}
          label="Job Search"
        />
        <RaisedButton
          containerElement={<Link to="/addjob" />}
          label="Add Job"
        />
        <RaisedButton
          containerElement={<Link to="/jobview" />}
          label="Job View"
        />
        <br />
        <br />
        <PageHeader>Dashboard</PageHeader>
        {jobsTable}<br /><br />
        {eventsTable}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let jobs = undefined;
  let events = undefined;
  if (state.get('jobs')) jobs = state.get('jobs').toJS();
  if (state.get('events')) events = state.get('events').toJS();
  return {
    jobs,
    events,
  };
};

DashboardContainer.propTypes = {
  jobs: PropTypes.array,
  events: PropTypes.array,
  dispatch: PropTypes.func,
};

export default connect(mapStateToProps)(DashboardContainer);

import React, { Component, PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import JobsTableData from '../components/dashboard/JobsTableData';
import EventsTableData from '../components/dashboard/EventsTableData';
import RaisedButton from 'material-ui/lib/raised-button';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import axios from 'axios';
import { initializeUser, setCurrentJob } from '../config/actions';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';

const style = {
  marginRight: 20,
};

class DashboardContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    // check to see if the dbUserID has been set in the redux
    // store. if not then this is the first visit to the dashboard
    // after the user logs in and some setup needs to be
    // done (initializeUser() which in turn rehydrates the redux
    // store from the db with the user's data)
    if (!this.props.app.dbUserID) {
      const context = this;
      // retrieve cookie to get the user's db id
      axios.get('/api/me').then(function(result) {
        context.props.dispatch(initializeUser(result.data[0].id));
      });
    }
  }

  handleToggle(event, toggled) {
    this.setState({
      [event.target.name]: toggled,
    });
  }

  handleChange(event) {
    this.setState({ height: event.target.value });
  }

  // Currently material-ui is buggy, so this is being called by
  // onCellClick in <JobsTableData> and <EventsTableData> where
  // it really should be called by onRowClick on a <TableRow>
  handleRowClick(event) {
    this.props.dispatch(setCurrentJob(this.props.jobs[event].id));
    browserHistory.push('/jobview');
  }

  goToJobSearch(event) {
    browserHistory.push('/jobsearch');
  }

  goToAddJob(event) {
    browserHistory.push('/addjob');
  }

  render() {
    // only show the table of job data if it is not empty
    console.log("Inside of dashboard render ", this.props.events);
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
        {jobsTable}<br /><br />

      <div className="addJobButtons">
        <FloatingActionButton
          mini
          className="button-circle"
          onMouseDown={this.goToJobSearch}
          >
          <ContentAdd />
        </FloatingActionButton>
        <span className="button-circle-text">Job Search</span>
        &nbsp;&nbsp;
        <FloatingActionButton
          mini
          className="button-circle"
          onMouseDown={this.goToAddJob}
          >
          <ContentAdd />
        </FloatingActionButton>
        <span className="button-circle-text">Add Job</span>
      </div>

        <br /><br /><br />
        {eventsTable}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let app = undefined;
  let jobs = undefined;
  let events = undefined;
  if (state.get('app')) app = state.get('app').toJS();
  if (state.get('jobs')) jobs = state.get('jobs').toJS();
  if (state.get('events')) events = state.get('events').toJS();
  return {
    app,
    jobs,
    events,
  };
};

DashboardContainer.propTypes = {
  app: PropTypes.object,
  jobs: PropTypes.array,
  events: PropTypes.array,
  dispatch: PropTypes.func,
};

export default connect(mapStateToProps)(DashboardContainer);

import React, { Component, PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/lib/raised-button';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import JobData from '../components/jobview/JobData';
import DeleteJobComponent from '../components/jobview/DeleteJob';
import { deleteJob, addEvent, setEvents } from '../config/actions';

class JobViewContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      text: '',
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.postReminder = this.postReminder.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
  }

  handleDelete() {
    this.props.dispatch(deleteJob(this.props.jobID));
    browserHistory.push('/dashboard');
  }

  onDateChange(err, value) {
    this.setState({ date: value });
  }

  onTextChange(e) {
    this.setState({ text: e.target.value });
  }

  postReminder(event, dispatch) {
    let reminder = this.state;
    console.log("This is reminder ", reminder);
    this.setState({ date: '', text: '' });
    this.props.dispatch(addEvent(reminder));
    //do i need to rerender store?  this.props.dispatch(setEvents(reminder));
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
        <DeleteJobComponent handleDelete={this.handleDelete} />
        <JobData
          job={this.props.job}
          postReminder={this.postReminder}
          onDateChange={this.onDateChange}
          onTextChange={this.onTextChange}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let jobID = undefined;
  if (state.get('app')) jobID = state.get('app').toJS().currentJob;
  const jobs = state.get('jobs').toJS().filter(job => job.id === jobID);
  const job = jobs[0];
  return {
    jobID,
    job,
  };
};

JobViewContainer.propTypes = {
  jobID: PropTypes.string.isRequired,
  job: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  postReminder: PropTypes.func,
};

export default connect(mapStateToProps)(JobViewContainer);

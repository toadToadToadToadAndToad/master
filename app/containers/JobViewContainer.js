import React, { Component, PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/lib/raised-button';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import JobData from '../components/jobview/JobData';
import DeleteJobComponent from '../components/jobview/DeleteJob';
import { deleteJob } from '../config/actions';
import Notes from '../components/jobview/NotesComponent';
import { addNote, deleteNote } from '../config/actions';
import axios from 'axios';

class JobViewContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      text: '',
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleText = this.handleText.bind(this);
    this.handleNote = this.handleNote.bind(this);
    this.handleDeleteNote = this.handleDeleteNote.bind(this);
    this.postReminder = this.postReminder.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
  }

  handleText(e){
    this.setState({ text: e.target.value })
  }

  handleNote(event){
    event.preventDefault();
    this.props.dispatch(addNote(this.state, this.props.jobID));
    this.setState({ text: ' ' });
  }

  handleDelete() {
    this.props.dispatch(deleteJob(this.props.jobID));
    browserHistory.push('/dashboard');
  }

  handleDeleteNote(index, props){
    console.log(props.job.id,"AND", index)
    this.props.dispatch(deleteNote(props.job.id, index))
  }

  onDateChange(err, value) {
    console.log("new date ", value);
    this.setState({ date: value });
    console.log("After setting DATE ", this.state);
  }

  onTextChange(e) {
    this.setState({ text: e.target.value });
    console.log("after setting TEXT ", this.state);
    console.log("Inside of text change ", e.target.value);
  }

  postReminder() {
    // post to dashboard somehow here
    console.log('Inside postReminder');
    console.log(this.state);
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
          onChange={this.onChange} 
          onDateChange={this.onDateChange}
          onTextChange={this.onTextChange}
        />
        <Notes onNoteClick={this.handleNoteClick} 
        submitNote={this.handleNote}
        state={this.state.text}
        onTextAdd={this.handleText} 
        job={this.props.job}
        onDeleteNote={this.handleDeleteNote}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let jobID = undefined;
  let dbUserID = undefined;
  if (state.get('app')) jobID = state.get('app').toJS().currentJob;
  if (state.get('app')) dbUserID = state.get('app').toJS().dbUserID;
  const jobs = state.get('jobs').toJS().filter(job => job.id === jobID);
  const job = jobs[0];
  return {
    jobID,
    job,
    dbUserID,
  };
};

JobViewContainer.propTypes = {
  jobID: PropTypes.string.isRequired,
  job: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  postReminder: PropTypes.func,
};

export default connect(mapStateToProps)(JobViewContainer);


import React, { Component, PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/lib/raised-button';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import JobData from '../components/jobview/JobData';
import DeleteJobComponent from '../components/jobview/DeleteJob';
import Notes from '../components/jobview/NotesComponent';
import FlatButton from 'material-ui/lib/flat-button';
import { addNote, deleteNote, deleteJob, addEvent, setEvents, addContact } from '../config/actions';
import axios from 'axios';

class JobViewContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteTxt: '',
      date: '',
      text: '',
      c_name: '',
      c_email: '',
      c_phone: ''
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleText = this.handleText.bind(this);
    this.handleNote = this.handleNote.bind(this);
    this.handleDeleteNote = this.handleDeleteNote.bind(this);
    this.postReminder = this.postReminder.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
    this.handleContactName = this.handleContactName.bind(this);
    this.handleContactEmail = this.handleContactEmail.bind(this);
    this.handleContactPhone = this.handleContactPhone.bind(this);
    this.handleContact = this.handleContact.bind(this);
  }

  handleContactName(e){
    this.setState({ c_name: e.target.value })
  }

  handleContactEmail(e){
    this.setState({ c_email: e.target.value })
  }

  handleContactPhone(e){
    this.setState({ c_phone: e.target.value })
  }

  handleContact(event){
    event.preventDefault();
    this.props.dispatch(addContact(this.state, this.props.jobID));
    this.setState({ c_name: ' ', c_email: ' ', c_phone: ' ' });
  }

  handleText(e){
    this.setState({ noteTxt: e.target.value })
  }

  handleNote(event){
    event.preventDefault();
    this.props.dispatch(addNote(this.state, this.props.jobID));
    this.setState({ noteTxt: ' ' });
  }

  handleDeleteNote(index, props){
    this.props.dispatch(deleteNote(props.job.id, index))
    this.setState({ text: e.target.value })
  }

  handleDelete() {
    console.log('bob');
    this.props.dispatch(deleteJob(this.props.jobID));
    browserHistory.push('/dashboard');
  }

  handleDeleteNote(index, props){
    console.log(props.job.id,"AND", index)
    this.props.dispatch(deleteNote(props.job.id, index))
  }

 formatDate(date) {
    return (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
  }

  onDateChange(err, value) {
    const newDate = this.formatDate(value);
    const stringDate = newDate.toString();
    this.setState({ date: stringDate });
  }

  onTextChange(e) {
    this.setState({ text: e.target.value });
  }

  postReminder(event, dispatch) {
    const reminder = this.state;
    this.props.dispatch(addEvent(reminder));
    this.setState({ date: '', text: '' });
  }

  render() {
    let notesTable = '';
    return (
      <div>
<<<<<<< 223a2655dbf82d3dc3953e95d3334a587e62ea90
          <h2>Job View</h2>
          <div className="deleteJob">
            <FlatButton label="New" disabled />
            <FlatButton label="Pending" primary />
            <FlatButton label="Closed" primary />
          </div>
          <JobData
            job={this.props.job}
            postReminder={this.postReminder}
            onDateChange={this.onDateChange}
            onTextChange={this.onTextChange}
            dateVal={this.state.date}
            value={this.state.text}

            submitNote={this.handleNote}
            state={this.state.noteTxt}
            onTextAdd={this.handleText}
            onHandleDelete={this.handleDelete}
            onDeleteNote={this.handleDeleteNote}

            formatDate={this.formatDate}
            submitNote={this.handleNote}
            state={this.state.text}
            onTextAdd={this.handleText}
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
  job: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  postReminder: PropTypes.func,
};

export default connect(mapStateToProps)(JobViewContainer);

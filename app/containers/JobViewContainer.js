import React, { Component, PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/lib/raised-button';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import JobData from '../components/jobview/JobData';
import DeleteJobComponent from '../components/jobview/DeleteJob';
import Notes from '../components/jobview/NotesComponent';
import { addNote, deleteNote } from '../config/actions';
import axios from 'axios';
import { deleteJob, addEvent, setEvents } from '../config/actions';

class JobViewContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteTxt: '',
      date: '',
      text: '',
    };
    // this.handleDelete = this.handleDelete.bind(this);
    // this.handleText = this.handleText.bind(this);
    // this.handleNote = this.handleNote.bind(this);
    // this.handleDeleteNote = this.handleDeleteNote.bind(this);
    this.postReminder = this.postReminder.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
  }

  handleText(e){
    this.setState({ noteTxt: e.target.value })
    console.log(this.state.noteTxt)
  }

  handleNote(event){
    event.preventDefault();
    this.props.dispatch(addNote(this.state, this.props.jobID));
    this.setState({ noteTxt: ' ' });
  }

  handleDeleteNote(index, props){
    this.props.dispatch(deleteNote(props.job.id, index))
  }

  onDateChange(err, value) {
    const stringDate = value.toString();
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
          dateVal={this.state.date}
          value={this.state.text}
          submitNote={this.handleNote}
          state={this.state.noteTxt}
          onTextAdd={this.handleText} 
          onDeleteNote={this.handleDeleteNote} />
        </div>
        />
      </div>

    );
  }
}

// <Notes onNoteClick={this.handleNoteClick} 
//           submitNote={this.handleNote}
//           state={this.state.text}
//           onTextAdd={this.handleText} 
//           job={this.props.job}
//           onDeleteNote={this.handleDeleteNote}
//         />

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


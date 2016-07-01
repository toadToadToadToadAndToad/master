import React, { PropTypes } from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import { Tabs, Tab } from 'material-ui/Tabs';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import DatePicker from 'material-ui/DatePicker';
import Dialog from 'material-ui/Dialog';
import ContentAdd from 'material-ui/svg-icons/content/add';

const injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

const styles = {
  marginLeft: 20,
  paddingTop: 20,
  paddingBottom: 20,
  paddingLeft: 20,
  paddingRight: 20,
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  paper: {
    height: 100,
    width: 450,
    marginTop: 20,
    padding: 20,
    textAlign: 'left',
    display: 'inline-block',
  },
  contactPaper: {
    height: 100,
    width: 450,
    marginTop: 20,
    padding: 20,
    textAlign: 'left',
    display: 'inline-block',
  },
};

const JobData = (props) => (
  <div>
    <Paper zDepth={1} style={styles} className="jobview-data">
      <b>Company</b><br /><br />{props.job.company}<br /><br />
      <Divider /><br />
      <b>Title</b><br /><br />{props.job.title}<br /><br />
      <Divider /><br />
      <b>Location</b><br /><br />{props.job.location}<br /><br />
      <Divider /><br />
      <b>Type</b><br /><br />{props.job.type}<br /><br />
      <Divider /><br />
      <b>Description</b><br /><br />{props.job.description}<br /><br />
      <Divider /><br />
      <b>URL</b><br /><br /><a href={props.job.url}>{props.job.company}</a><br /><br />
      <Divider />
      <br />
      <RaisedButton
        className="delete-job"
        label="Delete Job"
        primary
        onClick={props.onHandleDelete}
      />
    </Paper>
    <Tabs className="tabs">
      <Tab label="Notes" >
        <div>
          <br />
          <TextField
            id="enterNote"
            hintText="Add your notes here"
            value={props.noteVal}
            onChange={props.onTextAdd}
          />
          <br /><br />
          <FloatingActionButton
            mini
            className="button-circle"
            onMouseDown={props.submitNote}
          >
            <ContentAdd />
          </FloatingActionButton>
          <span className="button-circle-text">Add Note</span>
          <Dialog
            title="Note Added"
            modal
            open={props.open}
            handleOpen={props.handleOpen}
          >
            Your node has been added to the job.
            <FlatButton
              label="OK"
              primary
              onMouseDown={props.handleClose}
            />
          </Dialog>
            {props.job.notes.map((note, index) =>
              (
              <Paper
                zDepth={1}
                style={styles.paper}
                key={index}
                onClick={props.onDeleteNote.bind(this, index, props)}
              >
                {note}
              </Paper>
              )
            )}
        </div>
      </Tab>
      <Tab label="Reminders" >
        <div>
          <br />
          <DatePicker
            hintText="Choose your date"
            mode="landscape"
            formatDate={props.formatDate}
            dateVal={props.dateVal}
            onChange={props.onDateChange}
          />
          <TextField
            hintText="Write your reminder here"
            required
            rows={2}
            value={props.value}
            onChange={props.onTextChange}
          />
          <br /><br />
          <FloatingActionButton
            mini
            className="button-circle"
            onMouseDown={props.postReminder}
          >
            <ContentAdd />
          </FloatingActionButton>
          <span className="button-circle-text">Add Reminder</span>
          <Dialog
            title="Reminder added"
            modal
            open={props.open}
            handleOpen={props.handleOpen}
          >
            Your reminder has been added to the dashboard.
            <FlatButton
              label="OK"
              primary
              onMouseDown={props.handleClose}
            />
          </Dialog>
        </div>
      </Tab>
      <Tab label="Contacts" >
        <div><br />
          <TextField
            id="enterContactName"
            hintText="Contact name"
            value={props.stateName}
            onChange={props.onContactName}
          />
          <TextField
            id="enterContactEmail"
            hintText="Contact email"
            value={props.stateEmail}
            onChange={props.onContactEmail}
          />
          <TextField
            id="enterContactEmail"
            hintText="Contact phone"
            value={props.statePhone}
            onChange={props.onContactPhone}
          />
          <br /><br />
          <FloatingActionButton
            mini
            className="button-circle"
            onMouseDown={props.submitContact}
          >
            <ContentAdd />
          </FloatingActionButton>
          <span className="button-circle-text">Add Contact</span>
          <Dialog
            title="Contact Added"
            modal
            open={props.open}
            handleOpen={props.handleOpen}
          >
            A contact has been added to the job.
            <FlatButton
              label="OK"
              primary
              onMouseDown={props.handleClose}
            />
          </Dialog>
            {props.job.contacts.map((contact, index) =>
              (
              <Paper
                zDepth={1}
                style={styles.contactPaper}
                key={index}
              >
              {contact.name} <br /> {contact.email} <br /> {contact.phone}
              </Paper>
              )
            )}
        </div>
      </Tab>
    </Tabs>
  </div>
);

JobData.propTypes = {
  job: PropTypes.object,
  noteVal: PropTypes.string.isRequired,
  onTextAdd: PropTypes.func.isRequired,
  onHandleDelete: PropTypes.func.isRequired,
  submitNote: PropTypes.func.isRequired,
};

export default JobData;

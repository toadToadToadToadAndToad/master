import React, { PropTypes } from 'react';
import Divider from 'material-ui/lib/divider';
import Paper from 'material-ui/lib/paper';
import TextField from 'material-ui/lib/text-field';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import Slider from 'material-ui/lib/slider';
import RaisedButton from 'material-ui/lib/raised-button';
import FlatButton from 'material-ui/lib/flat-button';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import Dialog from 'material-ui/lib/dialog';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';

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

function handleActive(tab) {
  alert(`A tab with this route property ${tab.props.route} was activated.`);
}

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
          <TextField id="enterNote"
            hintText="Add your notes here"
            onEnterKeyDown={props.submitNote}
            value={props.state}
            onChange={props.onTextAdd}
          />
            <br /><br />
            {props.job.notes.map((note, index) => {
              return (
                <Paper
                 zDepth={1}
                 style={styles.paper}
                 key={index}
                 onClick={props.onDeleteNote.bind(this, index, props)}
                >
                  {note}
                </Paper>
              );
            })}
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
      <Tab
        label="Contacts" >
        <div><br />
          <TextField id="enterContactName"
            hintText="Contact name"
            onEnterKeyDown={props.submitContact}
            value={props.stateName}
            onChange={props.onContactName}/>

          <TextField id="enterContactEmail"
            hintText="Contact email"
            onEnterKeyDown={props.submitContact}
            value={props.stateEmail}
            onChange={props.onContactEmail}/>

          <TextField id="enterContactEmail"
            hintText="Contact phone"
            onEnterKeyDown={props.submitContact}
            value={props.statePhone}
            onChange={props.onContactPhone}/>
          <br /><br />
            {props.job.contacts.map((contact, index) => {
              return (
                <Paper zDepth={1} style={styles.contactPaper}
                key={index} >
                  {contact.name} <br /> {contact.email} <br /> {contact.phone}
                </Paper>
              );
            })}
        </div>
      </Tab>
    </Tabs>
  </div>
);

JobData.propTypes = {
  job: PropTypes.object,
  state: PropTypes.string.isRequired,
  onTextAdd: PropTypes.func.isRequired,
  onHandleDelete: PropTypes.func.isRequired,
};

export default JobData;

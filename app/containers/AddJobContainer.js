import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import TextField from 'material-ui/lib/text-field';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import FlatButton from 'material-ui/lib/flat-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import Dialog from 'material-ui/lib/dialog';
import { addJob } from '../config/actions';

class AddJobContainer extends Component {
  constructor() {
    super();
    this.state = {
      company: '',
      title: '',
      location: '',
      url: '',
      type: 1,
      description: '',
      open: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleTextInput = this.handleTextInput.bind(this);
    this.saveJobsToStore = this.saveJobsToStore.bind(this);
  }

  handleChange(event, index, value) {
    this.setState({ type: value });
  }

  handleTextInput(event, id) {
    var update = {};
    update[event.target.id] = event.target.value;
    this.setState(update);
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    browserHistory.push('/dashboard');
  }

  saveJobsToStore() {
    const jobTypes = [
      'Full Time',
      'Part Time',
      'Temporary',
      'Contract',
    ];

    const job = {
      company: this.state.company,
      title: this.state.title,
      location: this.state.location,
      type: jobTypes[this.state.type - 1],
      url: this.state.url,
      description: this.state.description,
    }

    this.props.dispatch(addJob(job));
    this.handleOpen();
  }

  render() {
    const actions = [
      <FlatButton
        label="OK"
        primary
        onMouseDown={this.handleClose}
      />,
    ];

    return (
      <div>
        <h1>Add Job</h1>
        <form
          className="job-form"
        >
          <TextField
            id="company"
            hintText="Company"
            onChange={this.handleTextInput}
          />&nbsp;&nbsp;
          <TextField
            id="title"
            hintText="Job Title"
            onChange={this.handleTextInput}
          /><br />
          <TextField
            id="location"
            hintText="Location"
            onChange={this.handleTextInput}
          />&nbsp;&nbsp;
          <TextField
            id="url"
            hintText="URL"
            onChange={this.handleTextInput}
          /><br />
          <SelectField
            id="type"
            value={this.state.type}
            onChange={this.handleChange}
          >
            <MenuItem value={1} primaryText="Full Time" />
            <MenuItem value={2} primaryText="Part Time" />
            <MenuItem value={3} primaryText="Temporary" />
            <MenuItem value={4} primaryText="Contract" />
          </SelectField><br />
          <TextField
            id="description"
            hintText="Description"
            multiLine
            rows={3}
            onChange={this.handleTextInput}
          />
        </form>
        <div
          className="addJobButton-aj">
            <FloatingActionButton
              mini
              className="button-circle"
              onMouseDown={this.saveJobsToStore}
            >
              <ContentAdd />
            </FloatingActionButton>
          <span className="button-circle-text">Add Job</span>
          <br /><br /><br /><br />
        </div>
        <Dialog
          title="Job Added!"
          actions={actions}
          modal
          open={this.state.open}
        >
          The job has been added to your dashboard.
        </Dialog>
      </div>
    );
  }
}

AddJobContainer.propTypes = {
  dispatch: PropTypes.func,
};

export default connect()(AddJobContainer);

import React from 'react';
import Snackbar from 'material-ui/lib/snackbar';
import RaisedButton from 'material-ui/lib/raised-button';
import axios from 'axios';

class SnackbarComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  handleTouchTap() {
    this.setState({
      open: true,
    });
    const data = {
        text: this.props.reminder.text,
        date: this.props.reminder.date
      };
    axios.post("/api/calendar", {
      data
    })
  }


  handleRequestClose() {
    this.setState({
      open: false,
    });
  }


  render() {
    return (
      <div>
        <RaisedButton
          label="Add to my calendar"
          onTouchTap={this.handleTouchTap}
        />
        <Snackbar
          open={this.state.open}
          message="Event added to your calendar"
          autoHideDuration={4000}

        />
      </div>
    );
  }
}

export default SnackbarComponent;

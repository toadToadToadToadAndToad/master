import React from 'react';
import Snackbar from 'material-ui/lib/Snackbar';
import RaisedButton from 'material-ui/lib/raised-button';

class SnackbarComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleTouchTap() {
    this.setState({
      open: true,
    });
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
        />
        <Snackbar
          message="Event added to your calendar"
          autoHideDuration={4000}
        />
      </div>
    );
  }
}

export default SnackbarComponent;

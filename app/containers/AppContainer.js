import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../styles/route-transition.css';
import '../styles/main.css';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import customMaterialTheme from '../styles/material-customizations';
import AppBar from 'material-ui/lib/app-bar';

class AppContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  getChildContext() {
    return {
      muiTheme: getMuiTheme(customMaterialTheme)
    };
  }

  logout() {
    console.log('LOGOUT!!!');
  }

  render() {

    return (
      <div className="container">
        <AppBar
          title="Number's Game"
          showMenuIconButton={false}
        >
        <p onClick={this.logout}>Logout</p>
        </AppBar>
        <ReactCSSTransitionGroup
          transitionName="appear"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          >{React.cloneElement(this.props.children, {key: this.props.location.pathname})}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
};

AppContainer.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default AppContainer;

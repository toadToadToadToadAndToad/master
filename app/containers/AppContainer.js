import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../styles/route-transition.css';
import '../styles/main.css';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import customMaterialTheme from '../styles/material-customizations';
import FontIcon from 'material-ui/lib/font-icon';
import CircularProgress from 'material-ui/lib/circular-progress';

const spinnerStyle = {
  position: 'absolute',
  left: '50%',
  top: '-5',
};

class AppContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  getChildContext() {
    return { muiTheme: getMuiTheme(customMaterialTheme) };
  }

  render() {
    return (
      <div>
        <div className="app-bar">
          <div className="container">
            <a href="/dashboard"><h1>Number's Game</h1></a>
            <div className={this.props.isWorking ? 'show' : 'hide'}>
              <CircularProgress
                size={0.75}
                color="#263238"
                style={spinnerStyle}
              />
            </div>
            <a href="/logout" className="logout">
              <FontIcon
                className="material-icons"
                color="#263238"
                hoverColor="#ff4081"
              >exit_to_app</FontIcon>
            </a>
          </div>
        </div>
        <div className="container main">
          <ReactCSSTransitionGroup
            transitionName="appear"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            {React.cloneElement(this.props.children,
              { key: this.props.location.pathname })}
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}

AppContainer.childContextTypes = {
  muiTheme: PropTypes.object,
};

const mapStateToProps = (state) => {
  const isWorking = state.get('db').toJS().isWorking;
  return {
    isWorking,
  };
};

AppContainer.propTypes = {
  children: PropTypes.object,
  location: PropTypes.object,
  isWorking: PropTypes.bool,
};

export default connect(mapStateToProps)(AppContainer);

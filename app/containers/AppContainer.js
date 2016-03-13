import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../styles/main.css';

//classes for container in es6
class AppContainer extends Component { 
  constructor() {
    //call my parent's constructor - Component (React thing...React.Component)
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="main-container">
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

export default AppContainer;
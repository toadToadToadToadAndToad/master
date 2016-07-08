import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const items = [
  <MenuItem key={1} value={1} primaryText="GitHub" />,
  <MenuItem key={2} value={2} primaryText="Dice" />,
  <MenuItem key={3} value={3} primaryText="CraigsList" />,
];

class SiteSelectComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index, value) {
    this.setState({ value });
  }

  render() {
    return (
      <div>
        <SelectField
          value={this.state.value}
          onChange={this.handleChange}
          floatingLabelText="Select Job Source"
        >
          {items}
        </SelectField>
      </div>
    );
  }
}

export default SiteSelectComponent;

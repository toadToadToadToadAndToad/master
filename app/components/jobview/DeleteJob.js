import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';

function DeleteJobComponent(props) {
  return (
    <div className="delete-job">
        <RaisedButton
          onMouseDown={props.handleDelete}
          label="Delete Job"
          primary
          type="submit"
        />
    </div>
  );
}

DeleteJobComponent.propTypes = {
  handleDelete: React.PropTypes.func,
};

export default DeleteJobComponent;

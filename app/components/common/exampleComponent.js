import React, { PropTypes } from 'react'

// this is an example of a pure function. most components should be written
// as pure functions (as opposed to the containers which are classes with state).
// basically, a pure function gets its data passed in via "props" from the
// container above (including function references). no side effects, given the
// same props passed in, the component
// will always do the same thing.
// also note how the propTypes are declared at the bottom. this way you
// can easily see what props the component uses. self-documenting code!

function ExampleComponent(props) {
  return (
    <div className="whatever" >
      <h1>{props.header}</h1>
      <div className="col-sm-12">
        <form onSubmit={props.onSubmitUser}>
          <div className="form-group">
            <input
              className="form-control"
              onChange={props.onUpdateUser}
              placeholder="Github Username"
              type="text"
              value={props.username} />
          </div>
          <div className="form-group col-sm-4 col-sm-offset-4">
            <button
              className="btn btn-block btn-success"
              type="submit">
                Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

ExampleComponent.propTypes = {
  onSubmitUser: PropTypes.func.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default ExampleComponent;

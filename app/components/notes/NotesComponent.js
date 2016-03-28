import React, { PropTypes } from 'react';

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
};


const Notes = (props) => (
  <div>
    <form onSubmit={props.submitNote}>
      <input
        required
        type="text"
        placeholder="Note"
        value={props.state}
        onChange={props.onTextAdd} />
    </form>
    <button onClick={props.onNoteClick} style={styles.headline}>Notes</button>
  </div>
);



Notes.propTypes = {
  state: PropTypes.string.isRequired,
  onTextAdd: PropTypes.func.isRequired,
  onNoteClick: PropTypes.func.isRequired
};

export default Notes;
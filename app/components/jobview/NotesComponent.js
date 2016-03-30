// import React, { PropTypes } from 'react';
// import Paper from 'material-ui/lib/paper';
// import TextField from 'material-ui/lib/text-field';

// const styles = {
//   height: 100,
//   width: 100,
//   margin: 20,
//   textAlign: 'center',
//   display: 'inline-block',

// };

// const Notes = (props) => (
//   <div>
//     <TextField id="enterNote"
//       onEnterKeyDown={props.submitNote}
//       value={props.state}
//       onChange={props.onTextAdd}/>
      
//       {props.job.notes.map((note, index) => {
//         return (
//           <Paper zDepth={1} style={styles} 
//           key={index} onClick={props.onDeleteNote.bind(this, index, props)}>
//             {note} 
//           </Paper>
//         );
//       })}
   
//   </div>
// );



// Notes.propTypes = {
//   state: PropTypes.string.isRequired,
//   onTextAdd: PropTypes.func.isRequired,
//   job: PropTypes.object.isRequired
// };

// export default Notes;
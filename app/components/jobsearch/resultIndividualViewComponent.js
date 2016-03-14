import React from 'react';
// import Table from 'material-ui/lib/table/table';
// import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
// import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
// import TableBody from 'material-ui/lib/table/table-body';

function ResultIndividualViewComponent(props) {
  return (
    <TableRow>
      <TableRowColumn>{props.jobName}</TableRowColumn>
      <TableRowColumn>{props.jobTitle}</TableRowColumn>
      <TableRowColumn>{props.jobDescription}</TableRowColumn>
      <TableRowColumn>{props.jobLocation}</TableRowColumn>
    </TableRow>
  );
}

export default ResultIndividualViewComponent;

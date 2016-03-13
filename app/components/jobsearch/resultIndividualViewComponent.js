var React = require('react');
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';

var ResultIndividualViewComponent = React.createClass({
  return  (
    <TableRow>
      <TableRowColumn>{this.props.jobName}</TableRowColumn>
      <TableRowColumn>{this.props.jobTitle}</TableRowColumn>
      <TableRowColumn>{this.props.jobDescription}</TableRowColumn>
      <TableRowColumn>{this.props.jobLocation}</TableRowColumn>
    </TableRow>
  )
});

module.exports = ResultIndividualViewComponent;
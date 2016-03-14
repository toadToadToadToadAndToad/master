import React from 'react';
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
// import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';

function ResultsViewComponent(props) {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Company Name</TableHeaderColumn>
            <TableHeaderColumn>Job Title</TableHeaderColumn>
            <TableHeaderColumn>Description</TableHeaderColumn>
            <TableHeaderColumn>Location</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.children}
        </TableBody>
      </Table>
    </div>
  );
}

ResultsViewComponent.propTypes = { children: React.PropTypes.element.isRequired };
export default ResultsViewComponent;

import React, { PropTypes } from 'react';
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';
import RaisedButton from 'material-ui/lib/raised-button';

const tableSettings = {
  fixedHeader: true,
  fixedFooter: true,
  stripedRows: false,
  showRowHover: true,
  selectable: true,
  multiSelectable: true,
  enableSelectAll: false,
  deselectOnClickaway: true,
  displayRowCheckbox: true,
  adjustForCheckbox: false,
  displaySelectAll: false,
  height: '300',
};

function ResultsViewComponent(props) {
  const jobListing = props.data.map((job) =>
    (
      <TableRow key={job.id}>
        <TableRowColumn>{job.company}</TableRowColumn>
        <TableRowColumn>{job.title}</TableRowColumn>
        <TableRowColumn>{job.type}</TableRowColumn>
        <TableRowColumn>{job.location}</TableRowColumn>
        <TableRowColumn><a href={job.url}>Apply</a></TableRowColumn>
      </TableRow>
    )
  );

  return (
    <div>
      <Table
        height={props.data.length > 6 ? tableSettings.height : undefined}
        fixedHeader={tableSettings.fixedHeader}
        fixedFooter={tableSettings.fixedFooter}
        selectable={tableSettings.selectable}
        multiSelectable={tableSettings.multiSelectable}
        onCellClick={props.onRowClick}
      >
        <TableHeader
          adjustForCheckbox={tableSettings.adjustForCheckbox}
          displaySelectAll={tableSettings.displaySelectAll}
          adjustForCheckbox
        >
          <TableRow
            displayRowCheckbox={tableSettings.displayRowCheckbox}
          >
            <TableHeaderColumn>Company Name</TableHeaderColumn>
            <TableHeaderColumn>Job Title</TableHeaderColumn>
            <TableHeaderColumn>Type</TableHeaderColumn>
            <TableHeaderColumn>Location</TableHeaderColumn>
            <TableHeaderColumn>Link</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          showRowHover={tableSettings.showRowHover}
          stripedRows={tableSettings.stripedRows}
          displayRowCheckbox
        >
          {jobListing}
        </TableBody>
      </Table>
    </div>
  );
}

ResultsViewComponent.propTypes = {
  data: PropTypes.array,
  onRowClick: PropTypes.func,
};

export default ResultsViewComponent;

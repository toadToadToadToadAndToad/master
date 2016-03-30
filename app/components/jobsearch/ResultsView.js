import React, { PropTypes } from 'react';
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';
import FontIcon from 'material-ui/lib/font-icon';

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
  height: '400',
};

function ResultsViewComponent(props) {
  const jobListing = props.data.map((job) =>
    (
      <TableRow key={job.id}>
        <TableRowColumn>{job.company}</TableRowColumn>
        <TableRowColumn>{job.title}</TableRowColumn>
        <TableRowColumn>{job.type}</TableRowColumn>
        <TableRowColumn>{job.location}</TableRowColumn>
        <TableRowColumn style={{ width: '20' }}>
          <a href={job.url} target="_blank">
            <FontIcon
              className="material-icons"
              style={{ fontSize: '16', verticalAlign: '-5' }}
              color="#263238"
              hoverColor="#ff4081"
            >launch</FontIcon>
          </a>
        </TableRowColumn>
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
            <TableHeaderColumn style={{ width: '20' }}>Link</TableHeaderColumn>
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

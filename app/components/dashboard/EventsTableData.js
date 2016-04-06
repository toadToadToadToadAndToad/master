import React, { PropTypes } from 'react';
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';
import SnackbarComponent from './SnackbarComponent';
import '../../styles/main.css';

const tableSettings = {
  fixedHeader: true,
  fixedFooter: true,
  stripedRows: false,
  showRowHover: true,
  selectable: false,
  multiSelectable: false,
  enableSelectAll: false,
  deselectOnClickaway: true,
  displayRowCheckbox: false,
  adjustForCheckbox: false,
  displaySelectAll: false,
  height: '300',
};

function EventsTableData(props) {
  return (
    <div>
      <h2>Reminders</h2>
      <Table
        height={props.events.length > 6 ? tableSettings.height : undefined}
        fixedHeader={tableSettings.fixedHeader}
        fixedFooter={tableSettings.fixedFooter}
        selectable={tableSettings.selectable}
        multiSelectable={tableSettings.multiSelectable}

      >
        <TableHeader
          adjustForCheckbox={tableSettings.adjustForCheckbox}
          displaySelectAll={tableSettings.displaySelectAll}
        >
          <TableRow
            displayRowCheckbox={tableSettings.displayRowCheckbox}
          >
            <TableHeaderColumn>Google Calendar</TableHeaderColumn>
            <TableHeaderColumn>Date</TableHeaderColumn>
            <TableHeaderColumn>Text</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          showRowHover={tableSettings.showRowHover}
          stripedRows={tableSettings.stripedRows}
          displayRowCheckbox={tableSettings.displayRowCheckbox}
        >
          {props.events.map((event, index) => {
            return (
              <TableRow
                key={index}
                // TODO: see comment above handleRowClick in DashboardContainer.js

              >
                <TableRowColumn>
                  <SnackbarComponent reminder={event} />
                </TableRowColumn>
                <TableRowColumn>{event.date}</TableRowColumn>
                <TableRowColumn>{event.text}</TableRowColumn>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

EventsTableData.propTypes = {
  events: PropTypes.array.isRequired,
  onRowClick: PropTypes.func.isRequired,
};

export default EventsTableData;

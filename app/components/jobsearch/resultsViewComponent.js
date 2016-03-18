import React from 'react';
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';
import RaisedButton from 'material-ui/lib/raised-button';

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
      <Table multiSelectable>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Company Name</TableHeaderColumn>
            <TableHeaderColumn>Job Title</TableHeaderColumn>
            <TableHeaderColumn>Type</TableHeaderColumn>
            <TableHeaderColumn>Location</TableHeaderColumn>
            <TableHeaderColumn>Link</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {jobListing}
        </TableBody>
      </Table>
    </div>
  );
}

ResultsViewComponent.propTypes = { data: React.PropTypes.array };
export default ResultsViewComponent;

import React, { Component } from 'react';
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';

function ResultsViewComponent(props) {
  const jobListing = props.data.map(function(job) {
    return (
      <TableRow key={job.id}>
        <TableRowColumn>{job.company}</TableRowColumn>
        <TableRowColumn>{job.title}</TableRowColumn>
        <TableRowColumn>{job.type}</TableRowColumn>
        <TableRowColumn>{job.location}</TableRowColumn>
      </TableRow>
    );
  });
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Company Name</TableHeaderColumn>
            <TableHeaderColumn>Job Title</TableHeaderColumn>
            <TableHeaderColumn>Type</TableHeaderColumn>
            <TableHeaderColumn>Location</TableHeaderColumn>
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

import React, { PropTypes } from 'react';
import Divider from 'material-ui/lib/divider';
import Paper from 'material-ui/lib/paper';
import TextField from 'material-ui/lib/text-field';

import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import Slider from 'material-ui/lib/slider';


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

const JobData = (props) => (
  <div>
  <Paper zDepth={1} style={styles}>
    <b>Company</b><br/><br /> {props.job.company}<br /><br />
    <Divider /><br />
    <b>Title</b><br/><br /> {props.job.title}<br /><br />
    <Divider /><br />
    <b>Location</b><br/><br /> {props.job.location}<br /><br />
    <Divider /><br />
    <b>Type</b><br/><br /> {props.job.type}<br /><br />
    <Divider /><br />
    <b>Description</b><br/><br /> {props.job.description}<br /><br />
    <Divider /><br />
    <b>URL</b><br/><br /> <a href={props.job.url}>{props.job.company}</a><br />
  </Paper>
  <br /><br />
    <Tabs>
      <Tab label="Notes" >
        <div>
          <h2 style={styles.headline}>Notes</h2>
          <p>
            Remember to enter on Heart Attack and Vine.
          </p>

        </div>
      </Tab>
      <Tab label="Reminders" >
        <div>
          <h2 style={styles.headline}>Reminders</h2>
          <p>
            This is another example tab.
          </p>
        </div>
      </Tab>
      <Tab
        label="Contacts"
        route="/home"
        onActive={handleActive}
      >
        <div>
          <h2 style={styles.headline}>Contacts</h2>
          <p>
            This is a third example tab.
          </p>
        </div>
      </Tab>
    </Tabs>
  </div>
);

function handleActive(tab) {
  alert(`A tab with this route property ${tab.props.route} was activated.`);
}


JobData.propTypes = {
  job: PropTypes.object.isRequired,
};

export default JobData;

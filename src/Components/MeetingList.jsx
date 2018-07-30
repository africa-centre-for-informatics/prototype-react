import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Meetings from './Meeting/Meetings';

const MeetingList = () => (
  <div className="ibox tabbable-panel">
    <div className="ibox-title">
      <div class="ibox-tools" style={{ float: 'right' }}>
        <a href="" class="btn btn-primary btn-xs">Add Meeting</a>
      </div>
      <Tabs id="uncontrolled-tab-example" className="tabbable-line">
        <Tab eventKey={1} title="Calendar">
          <div className="ibox-content">
            <Meetings />
          </div>
        </Tab>
        <Tab eventKey={2} title="Archive">
          <div className="ibox-content">
            <Meetings />
          </div>
        </Tab>
      </Tabs>

    </div>
  </div>
);

export default MeetingList;

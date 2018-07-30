import React from 'react';
import MeetingPanel from '../Panels/MeetingPanel';
import MissionPanel from '../Panels/MissonPanel';

const DashboardTab = () => (
  <div className="ibox float-e-margins">

    <div className="pad-td">
      <div className="row">
          <MissionPanel />
          <MeetingPanel />
      </div>
    </div>

  </div>
);

export default DashboardTab;

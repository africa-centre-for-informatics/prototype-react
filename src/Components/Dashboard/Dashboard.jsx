import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import DashboardTab from './Tabs/DashboardTab';
import OrganizationInfoTab from './Tabs/OrganizationInfoTab';
import UserListTab from './Tabs/UserListTab';

const Dashboard = () => (

  <React.Fragment>
    <div className="ibox tabbable-panel">
      <div className="ibox-title full-width" id="sliderOne">
        <Tabs id="uncontrolled-tab-example" className="tabbable-line">
          <Tab eventKey={1} title="Dashboard">
            <DashboardTab />
          </Tab>
          <Tab eventKey={2} title="Organization info">
            <OrganizationInfoTab />
          </Tab>
          <Tab eventKey={3} title="News & Events">
            <UserListTab />
          </Tab>
        </Tabs>
      </div>

      <div className="tabbable-line ibox-title no-width" id="sliderTwo">
        <ul className="nav nav-tabs ">
          <li className="active">
            <i className="fa fa-arrow-left"></i>
          </li>
        </ul>
        <div className="tab-content">
          Our mission is to build enduring lifelong relationships,
          sharing our expertise to help people live the lives they want.
          We do that by delivering innovative products that improve lives,
          by building trust the day our customers walk in the door,
          and by being the employer of choice in our community
                </div>
      </div>
    </div>

  </React.Fragment>
);

export default Dashboard;

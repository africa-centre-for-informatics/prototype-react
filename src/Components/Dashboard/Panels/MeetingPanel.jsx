import React from 'react';
import './meetingPanel.css';

const MeetingPanel = () => (
  <div role="complementary" className="meeting-panel bottom-pad">
    <div className="title-bar">
      <h3 className="title ">Upcoming Meetings</h3>
    </div>
    <button class="btn btn-primary btn-outline edit-button" type="button"><i class="fa fa-paste"></i> Edit</button>
    <div className="list-content" role="complementary">
      <div className="meeting-panel-item two-row-layout item-padding" role="button">
        <div className="meeting-panel-row">
          <div className="date-container">
            <span className="date-number">13th</span>
            <br />
            <span className="date-dow">Aug</span>
          </div>
          <div className="meeting-data">
            <div className="meeting-text">
              <span className="meeting-name ">[Sample] Audit Committee Meeting</span>
              <br />
              <span>372 W Ontario St #303, Chicago, IL 60654</span>
              <br />
              <span>Aug 13 1:00 PM EAT</span>
            </div>
          </div>
        </div>
      </div>
      <div className="meeting-panel-item two-row-layout" role="button">
        <div className="meeting-panel-row">
          <div className="date-container">
            <span className="date-number ">12th</span>
            <br />
            <span className="date-dow ">Sep</span>
          </div>
          <div className="meeting-data">
            <div className="meeting-text">
              <span className="meeting-name">[Sample] Board Meeting</span>
              <br />
              <span>372 W Ontario St #303, Chicago, IL 60654</span>
              <br />
              <span>Sep 12 1:00 PM EAT</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="pagination-controller-panel">
      <div className="pagination-left" role="button">See All</div>
    </div>
  </div>
);
export default MeetingPanel;

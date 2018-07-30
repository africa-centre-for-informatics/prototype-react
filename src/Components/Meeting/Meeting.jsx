import React from 'react';
import PropTypes from 'prop-types';

const Meeting = ({ meeting }) => (
  <div className="meeting-row">
    <div className="month-header">
      {meeting.monthyear}
    </div>
    <div className="meeting-list-row">
      <div className="date-container">
        <span className="date-number">{meeting.datenumber}</span>
        <br />
        <span className="date-dow">{meeting.datedow}</span>
      </div>
      <div className="meeting-data">
        <div className="meeting-text">
          <span className="meeting-name">{meeting.meetingname}</span>
          <br />
          <span>{meeting.location}</span>
          <br />
          <span>{meeting.datetime}</span>
        </div>
      </div>
    </div>
  </div>
);

Meeting.propTypes = {
  meeting: PropTypes.object
};

export default Meeting;

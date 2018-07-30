import React from 'react';
import './meetings.css';
import Meeting from './Meeting';

class Meetings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meetings: [
        {
          monthyear: 'September 2018', datenumber: '12th', datedow: 'WED',
          meetingname: '[Sample] Board Meeting',
          location: '372 W Ontario St #303, Chicago, IL 60654',
          datetime: 'Sep 12 1:00 PM EAT',
          id: '1'
        },
        {
          monthyear: 'August 2018', datenumber: '13th', datedow: 'MON',
          meetingname: '[Sample] Audit Committee Meeting',
          location: '372 W Ontario St #303, Chicago, IL 60654',
          datetime: 'Aug 13 1:00 PM EAT',
          id: '2'
        },
        {
          monthyear: 'July 2018', datenumber: '13th', datedow: 'MON',
          meetingname: '[Sample] Audit Committee Meeting',
          location: '372 W Ontario St #303, Chicago, IL 60654',
          datetime: 'Aug 13 1:00 PM EAT',
          id: '3'
        },
        {
          monthyear: 'June 2018', datenumber: '13th', datedow: 'MON',
          meetingname: '[Sample] Audit Committee Meeting',
          location: '372 W Ontario St #303, Chicago, IL 60654',
          datetime: 'Aug 13 1:00 PM EAT',
          id: '4'
        },
        {
          monthyear: 'May 2018', datenumber: '13th', datedow: 'MON',
          meetingname: '[Sample] Audit Committee Meeting',
          location: '372 W Ontario St #303, Chicago, IL 60654',
          datetime: 'Aug 13 1:00 PM EAT',
          id: '5'
        },
        {
          monthyear: 'August 2018', datenumber: '13th', datedow: 'MON',
          meetingname: '[Sample] Audit Committee Meeting',
          location: '372 W Ontario St #303, Chicago, IL 60654',
          datetime: 'Aug 13 1:00 PM EAT',
          id: '2'
        },
      ]
    }
  }

  render() {
    const { meetings } = this.state;
    const meeting = meetings.map((meeting) => <Meeting meeting={meeting} key={meeting.id} />);
    return (
      <div id="meetingList" className="list-content">
        {meeting}
      </div>
    )
  }
}

export default Meetings;

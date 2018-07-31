import React from 'react';
import Users from './Users/Users';
import { Tabs, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MeetingPanel from './Dashboard/Panels/MeetingPanel';
import { Animated } from "react-animated-css";

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
      width: '100%'
    };
    this.showUserInfo = this.showUserInfo.bind(this);
  }
  showUserInfo(e) {
    e.preventDefault();
    this.setState(prevState => ({
      showComponent: !prevState.showComponent,
      width: '50%'
    }));
  }
  render() {
    const parentStyle = {
      width: this.state.width
    };
    return (
      <div className="ibox tabbable-panel">
        <div className="ibox-title parent blade" style={parentStyle}>
          <div class="ibox-tools" style={{ float: 'right' }}>
            <a href="" class="btn btn-primary btn-xs">Create new Group</a>
            <a href="" class="btn btn-primary btn-xs">Create new user</a>
          </div>
          <Tabs id="uncontrolled-tab-example" className="tabbable-line">
            <Tab eventKey={1} title="Groups">
              <div className="ibox-content">
                <div className="table-responsive">
                  <table className="table table-hover">
                    <tbody>
                      <tr>
                        <td>
                          <Link to="">All Users</Link>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="">Audit Commitee</Link>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="">Board of Directors</Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Tab>
            <Tab eventKey={2} title="Users">
              <div className="ibox-content">
                <Users showUserInfo={this.showUserInfo}/>
              </div>
            </Tab>
          </Tabs>
        </div>
        { this.state.showComponent &&
          <div className="ibox-title children blade">
            <Animated animationIn="slideInRight" animationOut="slideOutRight" className="">
              <MeetingPanel />
            </Animated>
          </div>
        }
      </div>
    );
  }
}

export default UserList;

import React from 'react';
import Users from './Users/Users';
import { Tabs, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UserList = () => (
  <div className="ibox tabbable-panel">
    <div className="ibox-title">
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
            <Users />
          </div>
        </Tab>
      </Tabs>

    </div>
  </div>
);

export default UserList;
